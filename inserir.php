<?php
session_start();
require 'pdo/connection.php'; // Inclui o arquivo de conexão

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['enviar-cadastro'])) {
    $nome = $_POST['nome'] ?? null;
    $profissao = $_POST['profissao'] ?? null;
    $modalidade = $_POST['modalidade'] ?? null;
    $email = $_POST['email'] ?? null;
    $telefone = $_POST['telefone'] ?? null;

    // Validação básica dos dados (adapte conforme necessário)
    if (empty($nome) || empty($profissao) || empty($modalidade) || empty($email) || empty($telefone)) {
        $_SESSION['message'] = "Por favor, preencha todos os campos.";
        $_SESSION['message_type'] = "error";
        header("Location: form.php");
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
            $_SESSION['message'] = "Cadastro realizado com sucesso. Verifique seu email.";
            $_SESSION['message_type'] = "success";
            header("Location: form.php");
        } else {
            $_SESSION['message'] = "Erro ao inserir os dados.";
            $_SESSION['message_type'] = "error";
            header("Location: form.php");
        }
    }
}
?>
