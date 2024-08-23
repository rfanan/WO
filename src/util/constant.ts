export const CONSTANT: any = {
    V1_VERSION: "v1",
    CLOUD_URL: process.env.CLOUD_URL + "/api/",
}

export enum PageState {
    edit = "edit",
    create = "create",
    view = "view"
}