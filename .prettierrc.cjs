const config = {
  singleQuote: true,          // Utilizar comillas simples en lugar de comillas dobles
  semi: false,               // Omitir puntos y comas al final de las declaraciones
  tabWidth: 2,               // Número de espacios equivalentes a un tabulador
  useTabs: false,            // Utilizar espacios en lugar de tabuladores para la sangría
  printWidth: 160,           // Ancho máximo de la línea antes de realizar un salto de línea
  trailingComma: 'es5',      // Añadir una coma al final de las listas de propiedades o elementos
  arrowParens: 'avoid',      // Envolver paréntesis alrededor de los parámetros de las funciones de flecha siempre (always) o solo cuando sea necesario (avoid)
  bracketSpacing: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.jsx'],
      options: {
        printWidth: 160,
      },
    },
  ],
};

module.exports = config;
