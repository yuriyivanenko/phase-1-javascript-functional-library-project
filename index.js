const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const checkDataType = (collection) => Array.isArray(collection) ? 'array' : 'object'

const myEach = (collection, callbackFunc) => {
  checkDataType(collection) === 'array' ? 
    collection.forEach(callbackFunc) : 
    Object.values(collection).forEach(callbackFunc)
  return collection
}

const alertMe = (item) => { 
    alert(`${item}`)
}

const myMap = (collection, callbackFunc) => {
  checkDataType(collection)
}


console.log(myMap(unmodifiedTestArr, alertMe))
