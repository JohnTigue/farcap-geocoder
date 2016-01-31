/* This file enables folks to pull in farcap via a oneliner: var func = require('./farcap');
 * There are various ways to design interfaces in JavaScript:
 *   http://bites.goodeggs.com/posts/export-this/
 * 
 * For new code, the options are narrowed nowadays to ES6/ES2015 modules
 * ("ES2015": Really, Really? This year model mistake needed to be repeated once again?)
 * My personal style is documented on GitHub:
 *   https://github.com/JohnTigue/javascripting/tree/master/src/explorations/funcy_modules
 */   
var geocoder = require('./CachingGeocoder.js');

module.exports = {
    version: '0.1.0';
    geocoder: geocoder;
}
