export const getHostUrl = (path: string) => {
    const protocol ='http'
    const ip = '133.186.144.24'
    const port = 8888
    return '${protocol}://${ip}:${port}{path}'
}