import { ENDPOINTS } from "../config/endpoint";
import { requestToBackend } from "./request";

export async function API_getUsers(token: any, body?: any) {
    return await requestToBackend(
        "GET",
        ENDPOINTS.API_USERS,
        token,
        body
    );
}

export async function API_getAllServices(token: any, body?: any) {
    return await requestToBackend(
        "GET",
        ENDPOINTS.API_SERVICES,
        token,
        body
    );
}