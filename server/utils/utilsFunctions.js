/**
 * Simplifica la cadena eliminando espacios duplicados y trimea al inicio y al final
 * @param {string} str 
 * @returns {string}
 */
const cleanSpaces = (str) => {
  return str.replace(/\s+/g, ' ').trim()
}

/**
 * Verifica si una cadena está vacía, nula o undefined.
 * @param {string} str 
 * @returns {boolean} - True si la cadena está vacía, nula o undefined; de lo contrario, false.
 */
const isEmpty = (str) => {
  return str === '' || str === null || str === undefined;
};

/**
 * Verifica si un objeto está vacío (sin propiedades).
 * @param {Object} obj - El objeto a verificar.
 * @returns {boolean} - True si el objeto está vacío; de lo contrario, false.
 */
const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Limpia y normaliza una cadena de entrada para su uso seguro en aplicaciones.
 * @param {string} inputString - La cadena de entrada a sanear.
 * @returns {string | undefined} - La cadena saneada o undefined si la entrada es falsa o indefinida.
 */
const sanitizeString = (inputString) => {
  if (!inputString) {
    return undefined;
  }

  // Paso 1: Convertir caracteres especiales y acentos
  const cleanedString = inputString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Paso 2: Convertir a minúsculas
  const lowercaseString = cleanedString.toLowerCase();

  // Paso 3: Eliminar espacios innecesarios al inicio y al final y espacios duplicados
  const trimmedString = deleteSpaces(lowercaseString.trim());

  // Paso 4: Reemplazar caracteres especiales o espacios con guiones bajos
  const finalString = trimmedString.replace(/[^\w\s]/gi, '_');

  return finalString;
};


module.exports ={cleanSpaces, isEmpty, isObjectEmpty, sanitizeString}