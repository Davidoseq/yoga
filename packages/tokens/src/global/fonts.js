/**
 * @module fonts
 * @desc Fonts tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A font
 * @typedef Font
 *
 * @type {Object}
 * @property {String} family
 * @property {Array<Number|String>} weight
 */

/**
 * @type {Font[]}
 */
const fonts = [
  {
    family: 'Open Sans',
    weight: [400, 600, 700, '400i', '600i', '700i'],
  },
];
[fonts.openSans] = fonts;

export default fonts;
