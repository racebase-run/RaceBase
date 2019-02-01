import moment from 'moment'

// hours and minutes or minutes and seconds to decimal
export function timeStringToDecimal(st) {
  let a = st.split(':')
  let ts = (+a[0]) * 60 + (+a[1])

  return ts / 60
}

// decimal to hrs and min (min and sec)
export function timeDecimalToString(d) {
  let m = Math.floor(d)
  let s = Math.round((d - m) * 60)

  if (s >= 60) {
    let mo = Math.floor(s / 60)
    m += mo
    s -= mo * 60
  }
  s = ("0" + s).slice(-2)
  
  let string = (m == 'NaN' || s == 'aN') ? "0:00" : m + ":" + s

  return string
}

// formats date (moment object) to MM-DD-YYYY
export function formatDateUrl(m) {
  let dateFormat = "MM-DD-YYYY"
  return m.format(dateFormat)
}

// processes date in MM-DD-YYYY format and returns date object
export function getDateFromUrl(s) {
  let dateFormat = "MM-DD-YYYY"
  let day
  if (!s || !moment(s, dateFormat).isValid())
    day = new Date()
  else 
    day = moment(s, dateFormat).toDate()

  return day
}

export function getPace(time, distance) {
  if (!time || !distance) 
        return "0:00"

  let hm = time
  let a = hm.split(':')
  let seconds = (+a[0]) * 60 + (+a[1])

  let p = (seconds / distance) / 60
  return timeDecimalToString(p)
}