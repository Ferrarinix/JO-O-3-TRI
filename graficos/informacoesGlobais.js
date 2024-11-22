const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    try {
        // Fazendo a requisição dos dados
        const res = await fetch(url)
        const dados = await res.json()

        // Convertendo valores para bilhões (mais legível)
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(2)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2)

        // Calculando o tempo médio de conexão em horas e minutos
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 60)

        // Calculando a porcentagem de pessoas conectadas
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

        // Criando o parágrafo para exibição
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `
            Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas, e que aproximadamente 
            <span>${pessoasConectadas} bilhões</span> estão jogando ou conectadas em alguma rede social? 🎮 
            Elas passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas, 
            interagindo em plataformas de jogos e redes sociais.<br> Isso significa que aproximadamente 
            <span>${porcentagemConectada}%</span> da população mundial está conectada ao mundo dos jogos ou das redes sociais. 
            🚀
        `

        // Encontrando o container onde o parágrafo será inserido
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)

    } catch (error) {
        // Tratamento de erro
        console.error("Erro ao carregar os dados:", error)
        const erroParagrafo = document.createElement('p')
        erroParagrafo.classList.add('graficos-container__texto')
        erroParagrafo.innerHTML = "Desculpe, não conseguimos carregar as informações no momento. Tente novamente mais tarde. 🎮⚠️"
        document.getElementById('graficos-container').appendChild(erroParagrafo)
    }
}

// Chamada da função para exibir as informações
vizualizarInformacoesGlobais()
