// new CountdownTimer({
  //   selector: '#timer-1',
  //   targetDate: new Date('Jul 17, 2019'),
  // });
  class CountdownTimer {
    constructor({targetDate}) {
      this.daysRef = document.querySelector('span[data-value="days"]');
      this.hoursRef = document.querySelector('span[data-value="hours"]');
      this.minsRef = document.querySelector('span[data-value="mins"]');
      this.secsRef = document.querySelector('span[data-value="secs"]');
      this.targetDate = targetDate;
      this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      const timeLeft = this.getTimeComponents(time);
      this.updateClockface(timeLeft);
    }, 1000);
   }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs};
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
}

updateClockface({days, hours, mins, secs}) {
  this.daysRef.textContent = `${days}`;
  this.hoursRef.textContent = `${hours}`;
  this.minsRef.textContent = `${mins}`;
  this.secsRef.textContent = `${secs}`;
}
}

const timer = new CountdownTimer({
  targetDate: new Date('Jul 17, 2021'),
});

timer.start();