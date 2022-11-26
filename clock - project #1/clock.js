function displayTime() {
    date = new Date()
    dates = date.getDate()
    months = date.getMonth()
    years = date.getFullYear()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    session = document.getElementById('session')
    if (hours >= 12) session = 'PM'
    else session = 'AM'
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
    document.getElementById('dates').innerHTML = dates
    document.getElementById('months').innerHTML = months
    document.getElementById('years').innerHTML = years
}
setInterval(displayTime, 10) //shows when to refresh the time (milliseconds)