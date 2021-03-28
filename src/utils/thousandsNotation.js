/**
 * Return the number with a dot as thousands notation
 * @param input number
 * @return {string | undefined} number stringify with thousand notation
 */
const thousandsNotation = (input) => input?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export default thousandsNotation;
