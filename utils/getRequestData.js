export async function getRequestData(req) {
    let body = ''
    for await(const chunks of req) {
        body += chunks
    }
    
    return body;
}