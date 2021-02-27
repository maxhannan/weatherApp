// Google API Key
const apiKey = 'AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ'
// returns formatted address from search and lat/lng from search
const getName = async (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`

  const response = await fetch(url, { mode: 'cors' })
  const data = await response.json()

  return (data.results[0])
}

export default getName
