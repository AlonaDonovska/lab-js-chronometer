class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      if (printTimeCallback !== undefined){
        printTimeCallback()
      }
      this.currentTime +=1
    },1000)
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let newValue = value.toString()
    if (newValue.length < 2){
      newValue = '0' + newValue
    }
    return newValue
  }

  stop() {
    clearInterval(this.intervalId)
    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
