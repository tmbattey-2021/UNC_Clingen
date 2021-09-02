<?php

namespace Tests\Feature\End2End\Curations;

use Tests\TestCase;
use App\Contracts\OmimClient;
use App\Clients\Omim\OmimEntry;
use App\Rules\ValidHgncGeneSymbol;
use App\Clients\Omim\OmimEntryContract;
use Illuminate\Foundation\Testing\WithFaker;
use App\Clients\OmimClient as ConcreteOmimClient;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CurationUpdateTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->user = factory(\App\User::class)->create();
        $this->curation = factory(\App\Curation::class)->create(['curator_id' => $this->user->id]);
        $this->panel = factory(\App\ExpertPanel::class)->create();
        $this->rationale = factory(\App\Rationale::class)->create();
        $this->curationType = factory(\App\CurationType::class)->create();
    }

 
    /**
     * @test
     */
    public function updates_phenotypes_for_new_curation()
    {
        $phenotype = factory(\App\Phenotype::class)->create();
        $phenotype2 = factory(\App\Phenotype::class)->create();
        $this->curation->phenotypes()->attach($phenotype2->id);

        $data = [
            'page' => 'phenotypes',
            'gene_symbol' => 'BRCA1',
            'expert_panel_id' => $this->panel->id,
            'phenotypes' => [
                [
                    'mim_number' => 12345,
                    'name' => 'test pheno1',
                ],
                [
                    'mim_number' => 67890,
                    'name' => 'test pheno2',
                ],
                [
                    'mim_number' => $phenotype->mim_number,
                    'name' => $phenotype->name,
                ],
            ],
            'rationales' => [['id' => $this->rationale->id]],
            'nav' => 'next',
        ];

        $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$this->curation->id, $data)
            ->assertStatus(200)
            ->assertJsonFragment(['mim_number'=>$phenotype->mim_number])
            ->assertJsonFragment(['mim_number'=>12345])
            ->assertJsonFragment(['mim_number'=>67890]);
    }

    /**
     * @test
     */
    public function store_transforms_comma_separated_pmds_into_array()
    {
        $this->assumeGeneSymbolValid();

        $data = array_merge($this->curation->toArray(), [
            'page' => 'info',
            'pmids' => 'test,beans,monkeys',
        ]);
        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$this->curation->id, $data)
            ->assertJsonFragment(['pmids'=>["test","beans","monkeys"]]);

        $data = array_merge($this->curation->toArray(), [
            'page' => 'info',
            'pmids' => ['test', 'beans', 'monkeys'],
        ]);
        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$this->curation->id, $data)
            ->assertJsonFragment(['pmids'=>["test","beans","monkeys"]]);
    }

    /**
     * @test
     */
    public function stores_isolated_phenotype_on_isolated_phenotype_curation()
    {
        $this->assumeGeneSymbolValid();
        app()->bind(OmimClient::class, function ($app) {
            return new class extends ConcreteOmimClient {
                public function getEntry($mimNumber): OmimEntryContract
                {
                    return new OmimEntry(json_decode(file_get_contents(base_path('tests/files/omim_api/entry_response.json')))->omim->entryList[0]->entry);
                }
            };
        });

        $curation = $this->curation;
        $curation->update(['gene_symbol' => 'brca1']);

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['rationales'] = [$this->rationale];
        $data['isolated_phenotype'] = '100100';
        $data['nav'] = 'next';

        $this->withExceptionHandling();

        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data);

        $response->assertJsonFragment(['mim_number'=>100100]);
    }

    /**
     * @test
     */
    public function update_syncs_rationales_when_given()
    {
        $curation = $this->curation;
        $curation->update(['gene_symbol' => 'BRCA1']);
        $otherRationale = factory(\App\Rationale::class)->create();

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['rationales'] = [$this->rationale, $otherRationale];

        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data);
        $response->assertStatus(200);

        $this->assertEquals(collect([$this->rationale->id, $otherRationale->id]), $response->original->rationales->pluck('id'));
    }

    /**
     * @test
     * @group curation-validation
     */
    public function rationales_not_required_when_page_not_phenotypes()
    {
        $curation = $this->curation;
        $curation->update(['gene_symbol' => 'BRCA1']);

        $data = $curation->toArray();
        $data['page'] = 'info';
        $data['nav'] = 'next';

        $response = $this->actingAs($this->user, 'api')
            ->json('put', '/api/curations/'.$curation->id, $data)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group curation-validation
     */
    public function rationales_not_required_when_curation_type_not_single_and_1_phenotype()
    {
        $this->markTestIncomplete('Can not test this b/c can not figure out how to mock OmimClient in http test');
        $curation = $this->curation;
        $curation->update([
            'curation_type_id' => 1,
            'gene_symbol' => 'BRCA2',
        ]);

        $curation->phenotypes()->sync([]);
        $data = $curation->toArray();
        $data['curation_type_id'] = 1;
        $data['page'] = 'phenotypes';
        $data['rationales'] = null;
        $data['nav'] = 'next';

        $mock = $this->createMock(OmimClient::class);
        $mock->method('getGenePhenotypes')
            ->willReturn(collect([1]));
        $mock->method('geneSymbolIsValid')
            ->willReturn(true);

        app()->instance('App\Contracts\OmimClient', $mock);

        $response = $this->actingAs($this->user, 'api')
            ->json('put', '/api/curations/'.$curation->id, $data);

        $response->assertStatus(200);
    }

    /**
     * @test
     * @group curation-validation
     */
    public function rationales_not_required_if_1_phenotype_and_type_single_omim()
    {
        $curation = $this->curation;
        $curation->update([
            'curation_type_id' => 1,
            'gene_symbol' => 'myl2',
        ]);

        app()->bind('App\Contracts\OmimClient', function ($app) {
            $stub = $this->createMock(OmimClient::class);
            $stub->method('geneSymbolIsValid')
                ->willReturn(true);
            $stub->method('getGenePhenotypes')
                ->willReturn(collect([1]));

            return $stub;
        });

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['rationales'] = null;
        $data['nav'] = 'next';

        $response = $this->actingAs($this->user, 'api')
            ->json('put', '/api/curations/'.$curation->id, $data)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group curation-validation
     */
    public function rationales_required_if_1_phenotype_and_curation_type_other_than_single_omim()
    {
        $curation = $this->curation;
        $curation->update([
            'curation_type_id' => 2,
            'gene_symbol' => 'myl2',
        ]);

        app()->bind('App\Contracts\OmimClient', function ($app) {
            $stub = $this->createMock(OmimClient::class);
            $stub->method('geneSymbolIsValid')
                ->willReturn(true);
            $stub->method('getGenePhenotypes')
                ->willReturn(collect([1]));

            return $stub;
        });

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['rationales'] = null;
        $data['nav'] = 'next';

        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data);
        $response->assertStatus(422);

        $this->assertArrayHasKey('rationales', $response->original['errors']);
    }

    /**
     * @test
     * @group curation-validation
     */
    public function rationales_required_when_gene_has_more_than_1_phenotype()
    {
        app()->bind('App\Contracts\OmimClient', function ($app) {
            $stub = $this->createMock(OmimClient::class);
            $stub->method('geneSymbolIsValid')
                ->willReturn(true);
            $stub->method('getGenePhenotypes')
                ->willReturn(collect([1, 1]));

            return $stub;
        });

        $curation = $this->curation;
        $curation->update([
            'curation_type_id' => 1,
            'gene_symbol' => 'brca2',
        ]);

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['curation_type_id'] = 1;
        $data['rationales'] = null;
        $data['nav'] = 'next';

        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data);
        $response->assertStatus(422);

        $this->assertArrayHasKey('rationales', $response->original['errors']);
    }

    /**
     * @test
     * @group curation-validation
     */
    public function isolated_phenotype_required_when_curation_type_id_is_3()
    {
        $curation = $this->curation;
        $curation->update([
            'curation_type_id' => 3,
            'gene_symbol' => 'brca2',
        ]);

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['rationales'] = [1, 2];
        $data['isolated_phenotype'] = null;
        $data['nav'] = 'next';

        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data)
            ->assertStatus(422);

        $this->assertArrayHasKey('isolated_phenotype', $response->original['errors']);
    }

    /**
     * @test
     * @group curation-validation
     */
    public function isolated_phenotype_must_be_valid_mim_number_when_present()
    {
        $curation = $this->curation;
        $curation->update([
            'curation_type_id' => 3,
            'gene_symbol' => 'brca2',
        ]);

        $data = $curation->toArray();
        $data['page'] = 'phenotypes';
        $data['rationales'] = [1, 2];
        $data['isolated_phenotype'] = 123456;
        $data['nav'] = 'next';

        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data)
            ->assertStatus(422);

        $this->assertArrayHasKey('isolated_phenotype', $response->original['errors']);
    }

    /**
     * @test
     */
    public function hgnc_id_and_hgnc_name_are_ignored_when_updating_data()
    {
        $status = factory(\App\CurationStatus::class)->create();
        $curator = factory(\App\User::class)->create();
        $curation = $this->curation;
        $curation->update(['gene_symbol' => 'TP53', 'hgnc_id' => '777', 'hgnc_name' => 'if man is five']);

        $data = [
            'gene_symbol' => $curation->gene_symbol,
            'expert_panel_id' => $curation->expert_panel_id,
            'curator_id' => $curator->id,
            'curation_status_id' => $status->id,
            'nav' => 'next',
            'hgnc_id' => 666666,
            'hgnc_name' => 'beelzabub',
            'page' => 'info'
        ];
        $this->actingAs($this->user, 'api')
            ->json('PUT', '/api/curations/'.$curation->id, $data)
            // ->assertStatus(200)
            ->assertJsonFragment(['hgnc_id' => $curation->hgnc_id])
            ->assertJsonFragment(['hgnc_name' => $curation->hgnc_name]);
    }

}
