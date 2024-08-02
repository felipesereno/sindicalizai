<?php

$host = 'mysql742.umbler.com'; // Endereço do servidor MySQL
$db = 'sindicalizai_db'; // Nome do banco de dados
$user = 'sindical'; // Nome de usuário do MySQL
$pass = 'senhabanco'; // Senha do usuário do MySQL
$charset = 'utf8mb4'; // Conjunto de caracteres a ser utilizado

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Lançar exceções em caso de erros
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Modo de busca padrão
    PDO::ATTR_EMULATE_PREPARES   => false, // Desativar emulação de prepared statements
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    // Verificação de conexão bem-sucedida
    //echo 'Conexão bem-sucedida!';
} catch (\PDOException $e) {
    // Exibe uma mensagem de erro mais detalhada
    echo 'Erro na conexão: ' . $e->getMessage();
    exit;
}
?>
