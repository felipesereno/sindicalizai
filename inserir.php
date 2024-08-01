<?php
require 'pdo/connection.php'; // Inclui o arquivo de conexão

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['enviar-cadastro'])) {
    $nome = $_POST['nome'] ?? null;
    $profissao = $_POST['profissao'] ?? null;
    $modalidade = $_POST['modalidade'] ?? null;
    $email = $_POST['email'] ?? null;
    $telefone = $_POST['telefone'] ?? null;

    // Validação básica dos dados (adapte conforme necessário)
    if (empty($nome) || empty($profissao) || empty($modalidade) || empty($email) || empty($telefone)) {
        echo "Por favor, preencha todos os campos.";
    } else {
        // Mapeando o valor do radio button para o label correspondente
        $modalidade_label = ($modalidade === 'publico') ? 'Setor público' : 'Setor privado';
        
        $sql = "INSERT INTO usuario (nome, profissao, modalidade, email, telefone) VALUES (:nome, :profissao, :modalidade, :email, :telefone)";
        $stmt = $pdo->prepare($sql);
        
        // Bind dos parâmetros para evitar SQL injection
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':profissao', $profissao);
        $stmt->bindParam(':modalidade', $modalidade_label); // Usando o label mapeado
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telefone', $telefone);

        if ($stmt->execute()) {
            echo "Dados inseridos com sucesso!";
        } else {
            echo "Erro ao inserir os dados.";
        }
    }
}
?>