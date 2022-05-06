<?php

function get_controller_path()
{
    $dir = __DIR__;
    
    $directory = explode('\\', $dir);
    
    $exclude = $directory[count($directory) - 1];
    
    $controller_path = $directory[0];
    
    for ($i=0; $i < count($directory); $i++) 
    { 
        if ($directory[$i] != $exclude && $i != 0)
        {
            $controller_path .= '/'. $directory[$i];
        }
    }

    return $controller_path;
}

?>