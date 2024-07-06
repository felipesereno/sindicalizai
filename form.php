<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sindicalizaí</title>
    <!--STYLESHEET-->
    <link rel="stylesheet" href="src/css/style.css">
    <!--FAVICON-->
    <link rel="icon" href="src/img/raise-hand.png">
</head>
<body>
    <header>
        <h1>Sindicalizaí</h1>
        <nav>
            <ul>
                <li><a href="index.php">INÍCIO</a></li>
                <li><a href="doc.html">PORQUÊ SE SINDICALIZAR</a></li>
                <li><a href="map.html">MAPA DE SINDICATOS</a></li>
                <li><a href="form.html">ASSOCIE-SE AO MLC</a></li>
            </ul>
        </nav>
    </header>
    <!--FORMULARIO-->
    <section class="contato">
        <h2>ASSOCIE-SE AO MOVIMENTO LUTA DE CLASSES</h2>
        <p>Tem interesse em fazer parte do MLC e construir o trabalho de base com a gente? Preencha o formulário para que possamos lhe contatar.</p>
        <p>"A emancipação dos trabalhadores será obra dos próprios trabalhadores." - Karl Marx</p>   
        <form action="inserir.php" method="post">
            <input type="text" name="nome" minlength="4" maxlength="20" placeholder="Nome completo">
            <input type="text" name="profissao" minlength="4" maxlength="20" placeholder="Profissão">
            <!-- Agrupa os botões de rádio juntos -->
            <div class="radio-group">
                <input type="radio" id="publico" name="modalidade" value="publico">
                <label for="publico">Setor público</label>
                <input type="radio" id="privado" name="modalidade" value="privado">
                <label for="privado">Setor privado</label>
            </div>
            <input type="email" name="email" placeholder="E-mail">
            <input type="tel" name="telefone" placeholder="(DDD) XXXXX-XXXX">
            <button name="enviar-cadastro">ENVIAR</button>
        </form>
    </section>
    
    
    <footer>
        <div class="social">
            <a href="https://www.instagram.com/mlc.rs/"><img src="src/img/instagram.png"  alt="Instagram do MLC RS"></a>
        </div>    
    </footer>
</body>
</html>