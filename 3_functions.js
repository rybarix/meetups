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

const power2 = x => x*x;
function power2 (x) {
  return x*x;
}

function f(obj) {


}

f(1);
f({ name: "sandro" });
f([1,12,3,4,5]);

const user = {
  name,
  password,
  age,
  email
}

function parseUser(user) {
  console.log(
    user.name,
    user.password
  )
}

function parserUserv2({ name, password, age, email }) {
  console.log(name);
}

parseUserv2({
  name: "sandro",
  password: "x@x.com",
})



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




const arr = [1,2,3,4,5];
const [p,d,t,s,pi] = arr;
console.log(p);
console.log(d,t,s,pi);


const ojb = {
  key1: "value",
  key2: "value2"
}


const { k1, k2 } = ojb;

k1