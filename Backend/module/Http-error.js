class HttpError extends Error{
    constructor(messsage, errorCode){
        super(message)
        this.code= errorCode
    }
}

module.exports = HttpError