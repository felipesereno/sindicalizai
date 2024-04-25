document.addEventListener("DOMContentLoaded", function() {
  const paths = document.querySelectorAll(".map_container svg path");
  const stateNameDisplay = document.getElementById("states_name");
  paths.forEach(path => {
    path.addEventListener("click", function() {
      paths.forEach(p => p.classList.remove("selected"));
      this.classList.add("selected");
      const stateName = this.getAttribute("title");
      stateNameDisplay.textContent = "Sindicatos de " + stateName;
      carregarSindicatos(stateName);
    });
  });
});

function carregarSindicatos(estado) {
  const arquivoSindicatos = 'src/db/sindicatos.txt';
  
  fetch(arquivoSindicatos)
    .then(response => response.text())
    .then(data => {
      const linhas = data.trim().split("\n");
      const sindicatos = linhas.map(JSON.parse).filter(sindicato => sindicato.estado === estado);
      exibirSindicatos(sindicatos);
    })
    .catch(error => console.error('Erro ao carregar os dados dos sindicatos:', error));
}

function exibirSindicatos(sindicatos) {
  const container = document.querySelector('.info_container');
  container.innerHTML = ''; // Limpa o contêiner antes de adicionar novos elementos
  if (sindicatos.length === 0) {
    container.innerHTML = `<p>Não há sindicatos a serem exibidos nesse Estado.</p>`;
  } else {
    sindicatos.forEach(sindicato => {
      const sindicatoElement = document.createElement('div');
      sindicatoElement.className = 'sindicato';
      sindicatoElement.innerHTML = `
        <h3>${sindicato.nome}</h3>
        <p>Cidade: ${sindicato.cidade}</p>
        <p>Endereço: ${sindicato.endereco}</p>
        <p>Telefone: ${sindicato.telefone}</p>
      `;
      container.appendChild(sindicatoElement);
    });
  }
}