/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints an "inverted" solid right triangle `height`
 * characters tall consisting of `#` characters.
 *
 * Note, this PRINTS a triangle, it does not RETURN a triangle.
 *
 * @example
 * printInvertedSolidRightTriangle(3); // Prints the following:
 * ###
 * ##
 * #
 *
 * @example
 * printInvertedSolidRightTriangle(4); // Prints the following:
 * ####
 * ###
 * ##
 * #
 *
 * @param {number} height - The height of the triangle to print
 */
function printInvertedSolidRightTriangle(heightTri) {
  for (let i = 0; i < heightTri; i++) {
    var output = ''
    for (let j = 0; j < heightTri - i; j++) output += ' ';
    for (let k = 0; k <= i; k++) output += '*';
    console.log(output);
  }
}

function invertedSolidRightTriangleTest(heightTri) {
  console.log('');
  console.log(`Printing a INVERTED SOLID RIGHT TRIANGLE of height ${heightTri}:`);

  printInvertedSolidRightTriangle(5);
}

if (require.main === module) {
  console.log(invertedSolidRightTriangleTest(1));
  console.log(invertedSolidRightTriangleTest(2));
  console.log(invertedSolidRightTriangleTest(4));
  console.log(invertedSolidRightTriangleTest(6));
  console.log(invertedSolidRightTriangleTest(10));
}
module.exports = printInvertedSolidRightTriangle;
