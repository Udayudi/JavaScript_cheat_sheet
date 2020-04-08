const array = [1,2,3]

function addElementToArray(a, element) {
   return [...a, element, Math.random()]
    // a.push(element)
}