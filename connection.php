<?php
// Definindo as variáveis de conexão
$server = "localhost";
$user = "root";
$pass = "";
$bd = "sindicalizai_db";

// Criando a conexão
$conn = new mysqli($server, $user, $pass, $bd);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Dados a serem inseridos

$nome = "rudi";
$profissao = "dev";
$telefone = "0000000";
$email = "rudi@example.com";
$setor = "publico";

// Preparando a consulta SQL
$sqli = "INSERT INTO user (nome, profissao, telefone, email, setor) VALUES ('$nome', '$profissao', '$telefone', '$email', '$setor')";

// Executando a consulta
if ($conn->query($sqli) === TRUE) {
    echo "Novo registro inserido com sucesso";
} else {
    echo "Erro: " . $sqli . "<br>" . $conn->error;
}

// Fechando a conexão
$conn->close();
?>
