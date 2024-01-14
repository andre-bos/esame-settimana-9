const apiKey = '2a543a16'
const searchParam = 'i='
const searchValue = 'tt3896198'
const endPoint = `http://www.omdbapi.com/?apikey=${apiKey}&${searchParam}${searchValue}`

console.log('Questo è endpoint: ' + endPoint)

export { endPoint}