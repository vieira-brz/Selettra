<?php

class Mysql
{
  private static $instance;
  private $conn;
  private $servername;
  private $username;
  private $password;
  private $dbname;

  private function __construct()
  {
    $diretorio = __DIR__;
    $diretorio = explode('/databases', $diretorio);
    $diretorio = $diretorio[0];

    $db = parse_ini_file($diretorio . "/config/mysql.ini");
    $this->servername = $db["host"];
    $this->username = $db["user"];
    $this->password = $db["pwd"];
    $this->dbname = $db["name"];
    $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
  }

  public static function getInstance()
  {
    if (!self::$instance)
    {
      // If no instance then make one
      self::$instance = new self();
    }
    return self::$instance;
  }

  public function readDb($query)
  {
    if ($this->conn != null)
    {
      if ($result = $this->conn->query($query))
      {
        if ($result->num_rows > 0)
        {
          $data = array();
          
          while ($row = $result->fetch_assoc())
          {
            $data[] = $row;
          }

          $result->close();

          return $data;
        }
        else
        {
          return null; //Query executada mas sem linhas para retornar
        }
      }
      else
      {
        return -1; //Falha ao executar a query
      }
    }
    else
    {
      if ($this->conn != null)
      {
        $result = $this->conn->query($query);

       if (!$result)
       {
         echo 'Erro '. mysqli_errno(($this->conn)) .': '. mysqli_error($this->conn) ."\n";
       }
       else
       {
         return $this->conn->affected_rows;
       }
      }
      else
      {
        return -2;
      }
    }
  }

  function updateDb($query)
  {
    if ($this->conn != null)
    {
      $result = $this->conn->query($query);

     if (!$result)
     {
       echo 'Erro '. mysqli_errno(($this->conn)) .': '. mysqli_error($this->conn) ."\n";
     }
     else
     {
       return $this->conn->affected_rows;
     }
    }
    else
    {
      return -2;
    }
  }

  function __destruct()
  {
    $this->conn->close();
  }
}

?>