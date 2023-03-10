<?php

namespace App\Hgnc;

use App\Exceptions\ApiServerErrorException;
use App\Exceptions\HttpNotFoundException;
use App\Exceptions\HttpUnexpectedResponseException;
use App\Hgnc\HgncClientContract as HgncClientContract;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ServerException;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class HgncClient implements HgncClientContract
{
    private $guzzleClient;

    public function __construct(Client $guzzleClient)
    {
        $this->guzzleClient = $guzzleClient;
    }

    public function fetch($key, $value): HgncRecord
    {
        $url = '/fetch/'.$key.'/'.$value;
        try {
            return \Cache::remember('hgnc:'.$url, 120, function () use ($url, $key, $value) {
                $response = $this->guzzleClient->request('GET', $url);
                $responseObj = json_decode($response->getBody()->getContents());
                if ($responseObj->response->numFound == 0) {
                    throw new HttpNotFoundException($key.' '.$value.' not found in HGNC API.');
                }

                if ($responseObj->response->numFound > 1) {
                    throw new HttpUnexpectedResponseException('Search for '.$key.' '.$value.'resulted in '.$responseObj->response->numFound.' records found in HGNC API.');
                }

                return new HgncRecord($responseObj->response->docs[0]);
            });
        } catch (ServerException $e) {
            throw new ApiServerErrorException('HGNC', $url, $e);
        }
    }

    public function fetchHgncId(string $hgncId): HgncRecord
    {
        return $this->fetch('hgnc_id', $hgncId);
    }

    public function fetchGeneSymbol(string $geneSymbol): HgncRecord
    {
        return $this->fetch('symbol', $geneSymbol);
    }

    public function fetchPreviousSymbol(string $geneSymbol): HgncRecord
    {
        return $this->fetch('prev_symbol', $geneSymbol);
    }
}
