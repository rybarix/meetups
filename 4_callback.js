

const arr = [1,2,3,4,5];
arr

const len = arr.length
len

function add1(array, param) {
  let arrNew = [];
  const len = array.length;
  for(let i = 0; i < len; i++) {
    arrNew.push(array[i] + param);
  }

  return arrNew;
}
const ne = add1(arr, 3);
ne

function addIq200plus(array, callback) {
  let arrNew = [];
  const len = array.length;

  for(let i = 0; i < len; i++) {
    const novyPrvok = callback(array[i]);
    arrNew.push(novyPrvok);
  }
  return arrNew;
}

const p = addIq200plus(arr, function(prvok) {
  return prvok*prvok*prvok;
})

const p1 = addIq200plus(arr, (prvok) => {
  return prvok*prvok*prvok;
})

const p2 = addIq200plus(arr, prvok => {
  return prvok*prvok*prvok;
})

const p3 = addIq200plus(arr, prvok => prvok*prvok*prvok);
p3


/**
 * pole objektov s 2 attributami meno prievisko vek 
 * vypluj nove pole s tym ze celemeno a starsi ako 18rokov
 */

 const vstup = [
  { meno: "sandro", prievisko: "rybarik", vek: 20 },
  { meno: "sandro", prievisko: "rybarik", vek: 17 },
  { meno: "sandro", prievisko: "rybarik", vek: 16 },
]





const vystup = [
  { celemeno: "sandro rybarik", vek: 20 }
]

console.log({ sandro: "sandro" })

function map(arr, callback) {
  let arrNew = [];
  const len = arr.length;

  for(let i = 0; i < len; i++) {
    const novyPrvok = callback(arr[i]);
    if (novyPrvok !== undefined) {
      arrNew.push(novyPrvok);
    }
  }
  return arrNew;
}



const vv = map(vstup, element => {
  if(element.vek >= 18) {
    const novy = {
      celemeno: element.meno + " " + element.prievisko,
      vek: element.vek
    }
    return novy;
  }
})

vv


const vv2 = arr.map(val => {
  return val + 10
})


const vv3 = arr.filter((val, i, array) => {
  return val >= 3;
})
vv3

vv2



arr.map(function(val, i, array) {

})








var usersHTML = users.map(function(user) {
  var newDiv = document.createElement('div');
  var textNode = document.createTextNode(usersArray[i].name);
  newDiv.appendChild(textNode);
  
  return newDiv;
})