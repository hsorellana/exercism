<?php

function toRna($chain)
{
    if(strlen($chain) == 1){
        switch ($chain) {
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            case 'T':
                return 'A';
            case 'A':
                return 'U';
        }
    } else {
        $newChain = "";
        $chainSplitted = str_split($chain);
        foreach ($chainSplitted as $letter) {
            switch ($letter) {
                case 'G':
                    $newChain .= "C";
                    break;
                case 'C':
                    $newChain .= 'G';
                    break;
                case 'T':
                    $newChain .= 'A';
                    break;
                case 'A':
                    $newChain .= 'U';
                    break;
            }
        }
        return $newChain;
    }
}