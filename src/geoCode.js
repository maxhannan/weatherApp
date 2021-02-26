const apiKey = 'AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ'
// gets formatted address
const getName = async (lat, lon) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
  const response = await fetch(url, {
    mode: 'cors'
  })
  const data = await response.json()
  const addresses = data.results[0].address_components
  const targets = addresses.filter(component => {
    const type = component.types[0]
    const adLevelone = 'administrative_area_level_1'
    const loc = 'locality'
    const country = 'country'
    if (type === adLevelone || type === loc || type === country) {
      return component
    }
  }).map(component => component.short_name)
  return (targets.join(', '))
}

export default getName
