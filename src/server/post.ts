export const get = <T extends object>(url:string, data:T) =>
    fetch("http://133.186.144.24:8888/api/v1/auth/valid", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "",
        }
    })

export const post = <T extends object>(url:string, data:T) =>
        fetch("http://133.186.144.24:8888/api/v1/auth/login", {
        "method": "POST",
        "headers": {
        "Content-Type": "application/json",
        "Authorization": ""
  },
  "body": "{\"clientId\":\"string\"}"
})


