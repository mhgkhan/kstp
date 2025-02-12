import { apiErrResponse, serverErrResponse } from "@/utils/responses/errResponses";

// connectDB();
export async function GET(request) {
    try {

        const body = await request.json();

        const { cnic, password } = body;

        // checking if user data is valid or not 
        if (!cnic || cnic.length < 12 || !password || password.length < 5) return apiErrResponse(false, 401, "Invilid credientials")
        else {
            
            // checking if user is exists in the database or not 
            


        }





    } catch (error) {
        return serverErrResponse(error);
    }
}