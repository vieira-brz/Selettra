<?php

class Login 
{
    private $con; 

    public function __construct($sql)
    {
        $this->con = $sql;
    }

    public function entrar($user, $password)
    {
        $query = 'select * from tdb.user where (
            EMAIL LIKE = "'.$user.'"
            OR 
            USER LIKE = "'.$user.'"
        ) and 
            PASS = md5("'.$password.'")';
        
        $user_data = $this->con->readDb($query);

        if (is_array($user_data))
        {
            $_SESSION[session_id()] = array(
                'matricula' => $user_data[0]['REGISTRATION'],
                'nome' => $user_data[0]['NAME'],
                'email' =>$user_data[0]['EMAIL'] ,
                'usuario' =>$user_data[0]['USER'] ,
                'senha' =>$user_data[0]['PASS'] ,
            );

            $retorno = true;
        }
        else 
        { 
            $retorno = false; 
        }

        return $retorno;
    }

    public function get_session()
    {
        return $_SESSION[session_id()];
    }

    public function sair()
    {   
        unset($_SESSION[session_id()]);
        unset($_SESSION);
    }

    public function __destruct()
    {
        unset($this->con);
    }

}

?>