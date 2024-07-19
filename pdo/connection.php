<?php
$host = 'localhost'; // Endereço do servidor MySQL
$db = 'sindicalizai_db'; // Nome do banco de dados
$user = 'root'; // Nome de usuário do MySQL
$pass = ''; // Senha do usuário do MySQL
$charset = 'utf8mb4'; // Conjunto de caracteres a ser utilizado

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Lançar exceções em caso de erros
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Modo de busca padrão
    PDO::ATTR_EMULATE_PREPARES   => false, // Desativar emulação de prepared statements
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>