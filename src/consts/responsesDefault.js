const INVALID_REQUEST = "Solicitud inválida"
const INTERNAL_ERROR = "Error al procesar solicitud"

const INVALID_REQUEST_RESPONSE = {
    error: true,
    errorMessage: INVALID_REQUEST
}

const INTERNAL_ERROR_RESPONSE = {
    error: true,
    errorMessage: INTERNAL_ERROR
}

const DEFAULT_SUCCESS_RESPONSE = {
    error: false,
    payload: {}
}

module.exports = {
    INVALID_REQUEST, 
    INVALID_REQUEST_RESPONSE,
    INTERNAL_ERROR_RESPONSE,
    DEFAULT_SUCCESS_RESPONSE
}

