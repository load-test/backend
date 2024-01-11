

function sendResponse(reply:any, statusCode:number, message:string, data:any){
    const responseData = (data !== "" && data !== null && data !== undefined) ? data : "No Data Available";
    
    reply.status(statusCode).send({
        code: statusCode,
        message: message,
        data: responseData
    })
}

function sendError(reply:any, statusCode:number, message:string, error:Error)  {
    reply.status(statusCode).send({
        code: statusCode,
        error: {
            message: message,
            details: error.message || 'No Details'
        }
    })
}

export {sendError,sendResponse}