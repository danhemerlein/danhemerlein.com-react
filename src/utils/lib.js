/**
 * Generates series of string of number from the given string value
 *  in case unique id cannot be provided to React-only key prop.
 * @param {string} str string value.
 * @returns {string}
 */
export const makeKey = (str) => {
  let key = 0;
  let i = str.length;
  while (i > 0) {
    key = ((key << 5) - key + str.charCodeAt(--i)) | 0;
  }
  return key.toString();
};
