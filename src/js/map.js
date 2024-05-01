document.addEventListener("DOMContentLoaded", function() {
  const paths = document.querySelectorAll(".map_container svg path");
  const stateNameDisplay = document.getElementById("states_name");
  paths.forEach(path => {
    path.addEventListener("click", function() {
      paths.forEach(p => p.classList.remove("selected"));
      this.classList.add("selected");
      const stateName = this.getAttribute("id");
      const format_name = getFormattedStateName(stateName)
      stateNameDisplay.textContent = "Sindicatos de " + format_name;
      carregarSindicatos(format_name);
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

function getFormattedStateName(stateId) {
  const stateNames = {
      "acre": "Acre",
      "alagoas": "Alagoas",
      "amapa": "Amapá",
      "amazonas": "Amazonas",
      "bahia": "Bahia",
      "ceara": "Ceará",
      "distrito_federal": "Distrito Federal",
      "espirito_santo": "Espírito Santo",
      "goias": "Goiás",
      "maranhao": "Maranhão",
      "mato_grosso": "Mato Grosso",
      "mato_grosso_do_sul": "Mato Grosso do Sul",
      "minas_gerais": "Minas Gerais",
      "para": "Pará",
      "paraiba": "Paraíba",
      "parana": "Paraná",
      "pernambuco": "Pernambuco",
      "piaui": "Piauí",
      "rio_de_janeiro": "Rio de Janeiro",
      "rio_grande_do_norte": "Rio Grande do Norte",
      "rio_grande_do_sul": "Rio Grande do Sul",
      "rondonia": "Rondônia",
      "roraima": "Roraima",
      "santa_catarina": "Santa Catarina",
      "sao_paulo": "São Paulo",
      "sergipe": "Sergipe",
      "tocantins": "Tocantins"
  };

  return stateNames[stateId] || stateId;
}