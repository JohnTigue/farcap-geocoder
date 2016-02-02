/*
 * This file enables pulling in farcap via a oneliner: 
 *   var func = require('./farcap');
 *
 * There are various ways to design interfaces in JavaScript:
 *   http://bites.goodeggs.com/posts/export-this/
 * 
 * For new code, the options nowadays should really be similar to ES6/ES2015 modules.
 *
 * My personal style (implemented here) I call Funcy Modules. That is documented on GitHub:
 *   https://github.com/JohnTigue/javascripting/tree/master/src/explorations/funcy_modules
 */   
module.exports = (function(){
  'use strict'; 
  var geocoder = require('./CachingGeocoder.js');

  var aFuncy = function FarcapGeocoder(){
    //JFT-TODO: do I want to get into fluent style? Is this the factory which returns instances?	
    };

  aFuncy.version  = 0.1.0;
  aFuncy.geocoder = geocoder;
    
  return aFuncy;
  }());
 

