export interface ApiResponse<T> {
    timeStamp: String;
    statusCode: Number;
    status: String;
    message: String;
    data: { page: T }
}