class HttpError extends Error{  //inheritance ki hai error class se(extends)
  constructor(message,errorCode){
      super(message); //parent class ke constructor ko child class ke constructor se call lrne ke liye we were using SUPER
      this.code = errorCode;//taki aapan status code apni marzi se likh ske
  }
}
module.exports = HttpError;