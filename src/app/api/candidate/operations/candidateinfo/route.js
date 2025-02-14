import { serverErrResponse } from "@/utils/responses/errResponses";

export async function POST(request) {
    try {

        const body = await request.json();

        
        
    } catch (error) {
        return serverErrResponse(error)
    }
}