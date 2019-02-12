import wordsToNumbers from 'words-to-numbers'

export function format(x) {
  if (typeof x == 'undefined') return 
  x = wordsToNumbers(x.toLowerCase()) || 0; 
  if (x.match(/(\d\s?k|\d\s?km|(meter)(s)?|00\s?m)/g)) {
    var meters = getMeters(x);
    if (meters > 3000 && Number.isInteger(meters / 1000))
      return (meters / 1000) + " km"; 
    else 
      return meters + "m"; 
  } else if (x.match(/(mi)/g)) {
    var miles = getMiles(x); 
    return miles + " mi";
  } else {
    return "Unknown"
  }
}

let getMeters = function(x) {
  return parseInt(x
    .toLowerCase()
    .replace(',', '')
    .replace(/\s?(k)(m)?(ilometers)?/g, '000m')
    .replace(/\s?(meter)[s]?/g, 'm')
    .replace(' ', '')
    .match(/\d+(m)/g)[0]
    .replace('m', '')) || 0  
}

let getMiles = function(x) {
  return parseFloat(x
    .toLowerCase()
    .replace(',', '')
    .replace(' ', '')
    .replace(/(mi)(le)?(s)?/g, 'mi')
    .match(/\d+(.)?\d*(mi)/g)[0]
    .replace('mi', '')) || 0    
}