/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
const checkSide = (targetSide, side1, side2) => {
  if (targetSide < side1 + side2) {
    return true;
  }
  return false;
};

function isTriangle(a, b, c) {
  return checkSide(a, b, c) && checkSide(b, c, a) && checkSide(c, a, b);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
const checkIntersectionAxis = (r1Start, r1End, r2Start, r2End) => {
  if (r1End <= r2Start || r2End <= r1Start) {
    return false;
  }
  return true;
};

function doRectanglesOverlap(rect1, rect2) {
  const r1StartX = rect1.left;
  const r1EndX = rect1.left + rect1.width;
  const r2StartX = rect2.left;
  const r2EndX = rect2.left + rect2.width;

  const r1StartY = rect1.top;
  const r1EndY = rect1.top + rect1.height;
  const r2StartY = rect2.top;
  const r2EndY = rect2.top + rect2.height;

  return checkIntersectionAxis(r1StartX, r1EndX, r2StartX, r2EndX)
      && checkIntersectionAxis(r1StartY, r1EndY, r2StartY, r2EndY);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(/* circle, point */) {
  throw new Error('Not implemented');
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const letter = str.charAt(i);
    if (str.indexOf(letter) === i && str.indexOf(letter, i + 1) === -1) {
      return letter;
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  const coords = a < b ? `${a}, ${b}` : `${b}, ${a}`;
  return `${startBracket}${coords}${endBracket}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const reversedNumbers = ccn.toString().split('').reverse();
  const resultSum = reversedNumbers.reduce((acc, curVal, i) => {
    let curNumber = parseInt(curVal, 10);
    const isOdd = (i + 1) % 2 !== 0;
    if (!isOdd) {
      curNumber *= 2;
      if (curNumber > 9) {
        curNumber = (Math.floor(curNumber / 10)) + (curNumber % 10);
      }
    }
    return acc + curNumber;
  }, 0);

  if (resultSum % 10 === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let curNum = num;
  let sum = 10;
  while (sum > 9) {
    const numbers = curNum.toString().split('');
    sum = numbers.reduce((acc, curVal) => {
      const curNumber = parseInt(curVal, 10);
      return acc + curNumber;
    }, 0);
    curNum = sum;
  }
  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */

const bracketsBalance = {
  square: 0,
  round: 0,
  curly: 0,
  angle: 0,
};

const getBracketInfo = (bracket) => {
  switch (bracket) {
    case '[':
      return { name: 'square', type: 'open' };
    case ']':
      return { name: 'square', type: 'close' };
    case '(':
      return { name: 'round', type: 'open' };
    case ')':
      return { name: 'round', type: 'close' };
    case '{':
      return { name: 'curly', type: 'open' };
    case '}':
      return { name: 'curly', type: 'close' };
    case '<':
      return { name: 'angle', type: 'open' };
    case '>':
      return { name: 'angle', type: 'close' };
    default:
      return null;
  }
};


const checkBracket = (bracket) => {
  const bracketInfo = getBracketInfo(bracket);
  if (bracketInfo === null) {
    return true;
  }
  const { name, type } = bracketInfo;
  if (type === 'open') {
    bracketsBalance[name] += 1;
  }
  if (type === 'close') {
    bracketsBalance[name] += -1;

    if (bracketsBalance[name] < 0) {
      return false;
    }
  }
  return true;
};


function isBracketsBalanced(str) {
  const brackets = str.split('');
  for (let i = 0; i < brackets.length; i += 1) {
    const bracket = brackets[i];
    if (!checkBracket(bracket)) {
      return false;
    }
  }
  const {
    square, round, curly, angle,
  } = bracketsBalance;

  return square === 0
    && round === 0
    && curly === 0
    && angle === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const sortedByLength = pathes.sort((a, b) => a.length - b.length);
  const pathCount = sortedByLength.length;
  const pathItems = sortedByLength.map((path) => path.split('/').slice(1));

  const allPathItems = pathItems.reduce((acc, el) => acc.concat(el), []);
  const shortPath = pathItems[0];

  const commonDirPath = [];

  for (let i = 0; i < shortPath.length; i += 1) {
    const pathItem = shortPath[i];
    const occurrenceNumber = allPathItems.filter((curPathItem) => curPathItem === pathItem).length;
    if (occurrenceNumber === pathCount) {
      commonDirPath.push(pathItem);
    }
  }
  if (!commonDirPath.length) {
    const hasCommonRoot = pathes.filter((path) => path[0] === '/').length === pathCount;
    if (hasCommonRoot) {
      return '/';
    }
    return '';
  }

  return `/${commonDirPath.join('/')}/`;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
const checkHasEmpty = (line) => line.join('').length < 3;
const checkEveryO = (line) => line.every((el) => el === '0');
const checkEveryX = (line) => line.every((el) => el === 'X');

const checkLine = (line) => {
  if (checkHasEmpty(line)) {
    return undefined;
  }
  if (checkEveryO(line)) {
    return '0';
  }
  if (checkEveryX(line)) {
    return 'X';
  }
  return 'draw';
};

function evaluateTicTacToePosition(position) {
  const topLeftDiagonal = [position[0][0], position[1][1], position[2][2]];
  const topRightDiagonal = [position[0][2], position[1][1], position[2][0]];

  const matrixSize = [0, 1, 2];

  const topLeftDiagonalsResult = checkLine(topLeftDiagonal);
  if (topLeftDiagonalsResult !== 'draw' && topLeftDiagonalsResult !== undefined) {
    return topLeftDiagonalsResult;
  }

  const topRightDiagonalsResult = checkLine(topRightDiagonal);
  if (topRightDiagonalsResult !== 'draw' && topRightDiagonalsResult !== undefined) {
    return topRightDiagonalsResult;
  }

  for (let i = 0; i < matrixSize.length; i += 1) {
    const currentRow = position[i];
    const currentRowResult = checkLine(currentRow);
    if (currentRowResult !== 'draw' && currentRowResult !== undefined) {
      return currentRowResult;
    }

    const currentColumn = [position[0][i], position[1][i], position[2][i]];
    const currentColumnResult = checkLine(currentColumn);
    if (currentColumnResult !== 'draw' && currentColumnResult !== undefined) {
      return currentColumnResult;
    }
  }

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
