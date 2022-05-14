<?php

class Despesas 
{
    private $con; 

    public function __construct($sql)
    {
        $this->con = $sql;
    }
    
    public function get_despesas()
    {
        $query = 'select * from selettra.despesas';
        return $this->con->readDb($query);
    }

    public function insert()
    {
        $query = 'insert into selettra.despesas values()';
        return $this->con->updateDb($query);
    }

    public function __destruct()
    {
        unset($this->con);
    }
}

?>