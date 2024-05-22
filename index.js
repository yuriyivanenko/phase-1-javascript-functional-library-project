const changeToArray = (collection) => Array.isArray(collection) ? collection : Object.values(collection)
const multiplyByThree = (num) => num * 3
const alertMe = (item) => alert(`${item}`)
const callback = (acc, i, array) => (acc + (i * 3))
const callback2 = (acc, val, collection) => (acc + val )
function findCBGenerator(target) {
  return (function(currEl) { return target === currEl })
}

const myEach = (collection, callbackFunc) => {
  changeToArray(collection).forEach(callbackFunc)
  return collection
}

const myMap = (collection, callbackFunc) => changeToArray(collection).map(callbackFunc)

const myReduce = (collection, callbackFunc, acc) => {
  const array = changeToArray(collection)
  let startIndex = 0
  if(!acc){
    acc = array[0]
    startIndex = 1
  }
  let total = acc
  for(let i = startIndex; i < array.length; i++){
    acc = callbackFunc(acc, array[i],array)
  }
return acc
}


const myFind = (collection, callBackFunc) => {
  const array = changeToArray(collection)
  for(let i = 0; i < array.length; i++){
    if(callBackFunc(collection[i])){
      return collection[i]
    }
  }
  return
}

function excluder(currEl) {
  return (currEl > 10)
}

const myFilter = (collection, callBackFunc) => {
  const array = changeToArray(collection)
  let returnArray = []
  for(let i = 0; i < array.length; i++){
    if(callBackFunc(array[i])){
      returnArray.push(array[i])
    }
  }
  return returnArray
}

const mySize = (collection) => {
  const array = changeToArray(collection)
  return array.length
}

const myFirst = (collection, elemsToReturn) => {
  const array = changeToArray(collection)
  if(!elemsToReturn){
    return array[0]
  }else{
    return array.splice(0,elemsToReturn)
  }
}

const myLast = (collection, elemsToReturn) => {
  const array = changeToArray(collection)
  if(!elemsToReturn){
    return array[array.length - 1]
  }else{
    return array.splice(-elemsToReturn)
  }
}

const myKeys = (collection) => {
  const returnKeys = []
  for(const key in collection)[
    returnKeys.push(key)
  ]
  return returnKeys
}

const myValues = (collection) => {
  const returnValues = []
  for(const key in collection){
    returnValues.push(collection[key])
  }
  return returnValues
}
