/**
 * Classic FUNCTION
 */

 function name(param1, param2, param3) {
   // body
 }
name(1,2,3);

 /**
  * ARROW FUNCTION ES6
  */

const name2 = (param1, param2, param3) => {
  // body
}
name2(1,2,3);

/**-----------------------------------------
 * -- Object descructuralization in params--
 -----------------------------------------*/
function name3({ param1, param2, param3 }) {
  // body
}
name3({
  param1: "VAL0",
  param2: "VAL1",
  param3: "VAL2"
})

/**----------------------------------------
 * -- Array descructuralization in params--
 ----------------------------------------*/
function name4([ param1, param2, param3 ]) {
  //body
}
name4([1, 2, 3]);