// Função para obter o valor de uma variável CSS definida no :root
const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body);
    const value = bodyStyles.getPropertyValue(variavel);
    return value ? value.trim() : ''; // Retorna o valor sem espaços extras
}

// Configuração para o gráfico (ou qualquer outro componente visual)
const tickConfig = {
    family: getCSS('--font-game') || 'Press Start 2P, cursive', // Usando a fonte de estilo game
    size: 16,  // Tamanho da fonte do eixo
    color: getCSS('--accent-color') || '#00ADB5', // Usando a cor azul vibrante do tema
    fontStyle: 'normal', // Estilo da fonte, pode ser ajustado conforme necessário
}

// Exportando as funções e as configurações
export { getCSS, tickConfig };
