
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const continents = ['Africa', 'North America', 'South America', 'Europe', 'Asia', 'Antarctica', 'Australia', ]

  continents.forEach(callback)
  return continents
}

function doToArray(array, callback) {
  array.forEach(callback)
}
