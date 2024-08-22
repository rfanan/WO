const axios = require('axios')

export async function requestToCloud(requestMethod: string, url: string, authToken: any, body: any) {
    try {
        let request: any = {
            method: requestMethod,
            url: url
        }

        if (requestMethod === "GET") {
            request["headers"] = {
                'Access-Control-Allow-Origin': '*',
            }
            request["params"] = body;
        } else if (requestMethod === "POST") {
            request["headers"] = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
            request["data"] = body;
        } else if (requestMethod === "PUT") {
            request["headers"] = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
            request["data"] = body;
        } else if (requestMethod === "DELETE") {
            request["headers"] = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
            request["params"] = body;
        }

        if (authToken != undefined) {
            request["headers"]["Authorization"] = authToken;
        }

        let response = await axios(request);
        return response.data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function requestToBackend(requestMethod: string, url: string, authToken: any, body = {}) {

    try {
        let request: any = {
            method: requestMethod,
            url: process.env.NEXT_PUBLIC_WEB_URL + "/" + url,
        }

        if (requestMethod === "GET") {
            request["headers"] = {
                'Access-Control-Allow-Origin': '*',
            }
            request["params"] = body;
        } else if (requestMethod === "POST") {
            request["headers"] = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
            request["data"] = body;
        } else if (requestMethod === 'PUT') {
            request["headers"] = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
            request["data"] = body;
        } else if (requestMethod === 'DELETE') {
            request["headers"] = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
            request["params"] = body;
        }

        if (authToken != undefined) {
            request["headers"]["Authorization"] = authToken;
        }

        let response = await axios(request);
        return response.data;

    } catch (error: any) {
        console.log('error ', error);
        return null;
    }
}
