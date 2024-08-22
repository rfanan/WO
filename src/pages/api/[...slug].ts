import { requestToCloud } from "@/lib/api/request";
import { CONSTANT } from "@/util/constant";

export default async function handler(req: any, res: any) {
    const body = Object.assign(req.body, res.query);
    const slug = req.query.slug;

    let url = CONSTANT.CLOUD_URL + CONSTANT.V1_VERSION + "/" + slug.join("/");
    try {
        const response = await requestToCloud(
            req.method,
            url,
            req.headers.authorization,
            body
        )
        res.status(200).send(response)
    } catch (error) {
        res.status(500).json(null);
    }
}