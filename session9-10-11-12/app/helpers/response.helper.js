const responseCreator = (status, data, message) =>{
    return {
        apiStatus: status,
        data,
        message
    }
}

module.exports = responseCreator