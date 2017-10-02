<?php
  class db {
    //Properties
    private $dbhost = 'localhost';
    private $dbuser = 'root';
    private $dbpass = '';
    private $dbname = 'abigby_rest';

    //Connect to Database
    public function connect() {
      $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";

      //PDO PHP DATA OBJECT - An interface that will interface with MYSQL
      $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);

      $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      return $dbConnection;
    }
  }

 ?>
