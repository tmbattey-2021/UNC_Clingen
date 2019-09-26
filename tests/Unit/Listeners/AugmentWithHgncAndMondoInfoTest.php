<?php

namespace Tests\Unit\Listeners;

use App\Curation;
use Tests\TestCase;
use App\Events\Curation\Saved;
use App\Jobs\Curation\AugmentWithHgncInfo;
use App\Jobs\Curation\AugmentWithMondoInfo;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Listeners\Curations\AugmentWithHgncAndMondoInfo;

class AugmentWithHgncAndMondoInfoTest extends TestCase
{
    public function setUp():void
    {
        parent::setUp();
        $this->curation = factory(Curation::class)->create();
        // make gene_symbol and mondo_id dirty so conditions met
        $this->curation->gene_symbol = 'MLTN1';
        $this->curation->mondo_id = '00012345';
        $this->event = new Saved($this->curation);
        $this->listener = new AugmentWithHgncAndMondoInfo();
    }
    

    /**
     * @test
     */
    public function dispatches_AugmentWithHgncInfo()
    {
        \Bus::fake();
        $this->listener->handle($this->event);

        \Bus::assertDispatched(AugmentWithHgncInfo::class);
    }
    
    /**
     * @test
     */
    public function dispatches_AugmentWithMondoInfo()
    {
        \Bus::fake();
        $this->listener->handle($this->event);

        \Bus::assertDispatched(AugmentWithMondoInfo::class);
    }
    
}