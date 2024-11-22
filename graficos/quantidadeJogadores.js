import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color') // Usando a cor vibrante do tema para o gráfico
            }
        }
    ]

    const layout = { 
        plot_bgcolor: getCSS('--bg-color'), // Fundo do gráfico
        paper_bgcolor: getCSS('--bg-color'), // Fundo do papel (do gráfico)
        title: {
            text: 'Plataformas de Jogos com Mais Jogadores Ativos',
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Cor do título
                size: 30,
                family: getCSS('--font') // Fonte do título
            }
        },
        xaxis: {
            tickfont: tickConfig, // Configuração da fonte para os ticks no eixo X
            title: {
                text: 'Plataformas de Jogos',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo X
                }
            }
        },
        yaxis: {
            tickfont: tickConfig, // Configuração da fonte para os ticks no eixo Y
            title: {
                text: 'Jogadores Ativos (em bilhões)',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo Y
                }
            }
        }
    }

    // Criando o div para o gráfico
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)

    // Gerando o gráfico com Plotly
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()
