export interface WistiaUploadFailedResponse {
  error: Error
}

export interface Error {
  message: Message
}

export interface Message {
  originalRequest: XMLHttpRequest
  causingError: null
}
