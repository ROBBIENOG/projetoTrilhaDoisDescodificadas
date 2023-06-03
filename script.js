// Definição do número máximo de caracteres
var paragraphs = document.getElementsByClassName("numbercaractere");
var maxLength = 25; 

        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].textContent = paragraphs[i].textContent.slice(0, maxLength);
        }



// Carrossel com depoimentos

// Essa parte seleciona todos os cartões com depoimentos
const depoimentos = document.querySelectorAll('.depo__cards');

// Define o índice inicial e o intervalo de tempo em milissegundos
let indiceInicial = 0;
const intervalo = 1500; // 1,5 segundos

// Exibe os três cartões com depoimentos que aparecem na tela
function exibirDepoimentos() {
  
  depoimentos.forEach(depoimento => {
    depoimento.style.display = 'none';
  });

  // Exibe os três depoimentos atuais
  for (let i = indiceInicial; i < indiceInicial + 3; i++) {
    const indice = i % depoimentos.length;
    depoimentos[indice].style.display = 'flex';
  }
}

// Função para avançar para os próximos depoimentos
function avancarDepoimentos() {
  // Atualiza o índice inicial para avançar
  indiceInicial = (indiceInicial + 1) % depoimentos.length;

  // Exibe os novos depoimentos
  exibirDepoimentos();
}

// Inicia o carrossel
function iniciarCarrossel() {
  // Exibe os primeiros três depoimentos
  exibirDepoimentos();

  // Configura o intervalo para avançar os depoimentos
  setInterval(avancarDepoimentos, intervalo);
}

// Chama a função para iniciar o carrossel quando o documento HTML estiver carregado
document.addEventListener('DOMContentLoaded', iniciarCarrossel);


// Botão para voltar ao início da página

// Função para fazer a rolagem até o topo da página
function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Exibe ou oculta o botão "Voltar ao Topo" com base na posição de rolagem da página
  window.onscroll = function() {
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnVoltarTopo.style.display = 'block';
    } else {
      btnVoltarTopo.style.display = 'none';
    }
  };
  