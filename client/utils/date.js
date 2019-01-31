import moment from 'moment'

// hours and minutes or minutes and seconds to decimal
export function timeStringToDecimal(st) {
  let a = st.split(':')
  let ts = (+a[0]) * 60 + (+a[1])

  return ts / 60
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
  let pm = Math.floor(p)
  let ps = Math.round((p - pm) * 60)

  ps = ("0" + ps).slice(-2)

  let pace = (pm == 'NaN' || ps == 'aN') ? "0:00" : pm + ":" + ps
  return pace
}