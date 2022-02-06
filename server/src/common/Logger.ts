class Logger {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
  log() {
    if (!(process.env.NODE_ENV === 'TEST')) {
      console.log(this.message);
    }
    return this.message;
  }
  logError() {}
  logHttpError() {}
}

export default Logger;
