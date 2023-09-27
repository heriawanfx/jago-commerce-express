const ApiResponse = ( res, data, error) => {
    return res.json({
        code: res.statusCode,
        message: error,
        data: data,
    })
}

export { ApiResponse };