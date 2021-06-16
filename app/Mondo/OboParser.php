<?php

namespace App\Mondo;

class OboParser
{
    const ATTRS = [
        'id' => 'mondo_id',
        'name' => 'name',
        'is_obsolete' => 'is_obsolete',
        'replaced_by' => 'replaced_by'
    ];

    protected $oboPath;
    protected $handle;

    private $versionDate = null;

    public function __construct($oboPath = null)
    {
        $this->setOboPath($oboPath);
    }

    public function getVersionDate()
    {
        if (!$this->versionDate) {
            $this->rewind();
            while (($line = fgets($this->handle)) !== false) {
                if (substr($line, 0, 13) == 'data-version:') {
                    $this->versionDate = substr($line, 23, 10);
                }
            }
            $this->rewind();
        }
        return $this->versionDate;
    }

    public function getNextTerm()
    {
        $inTerm = false;
        $term = $this->initTerm();
        while (($line = fgets($this->handle)) !== false) {
            $line = trim($line);

            if ($line == '[Term]') {
                $inTerm = true;
                continue;
            }

            if ($inTerm) {
                if ($line == '') {
                    break;
                }
                [$key, $val] = explode(": ", $line);
                if (in_array($key, array_keys(static::ATTRS))) {
                    $term[static::ATTRS[$key]] = $this->evaluate($val);
                }
            }
        }
        if (is_null($term['mondo_id'])) {
            return false;
        }
        return $term;
    }

    public function setOboPath($oboPath)
    {
        $this->oboPath = $oboPath;
        if ($oboPath) {
            $this->handle = fopen($this->oboPath, 'r');
        }
    }

    public function rewind()
    {
        rewind($this->handle);
    }

    private function initTerm()
    {
        $term = [];
        foreach (static::ATTRS as $attr) {
            $term[$attr] = null;
        }
        return $term;
    }

    private function evaluate($value)
    {
        if ($value == 'true') {
            return true;
        }

        if ($value == 'false') {
            return false;
        }

        return $value;
    }
}
