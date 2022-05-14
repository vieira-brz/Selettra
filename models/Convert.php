<?php

class Convert 
{
    public function utf8_array($array, $orgnize_key = false)
    {
        if (is_array($array))
        {
            foreach ($array as $key => $value) 
            {
                $value = array_map('utf8_encode', $value);
                if ($orgnize_key) { $return[$key] = $value; } else { $return[] = $value; }
            } 

            if (is_array($return))
            {
                return $return
            }
            else 
            { 
                throw new Exception('Parâmetro 1 deve ser um Array');
                return false;
            }
        }
        else 
        { 
            throw new Exception('Parâmetro 1 deve ser um Array');
            return false;
        }
    }
}

?>