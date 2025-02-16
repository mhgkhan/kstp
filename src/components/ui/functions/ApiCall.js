import EnvObjs from "@/config/FreezeEnvs"

export const postApiCall = async function (path, data) {
    try {

        const request = await fetch(`${EnvObjs.apiDOMAIN}${path}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })

        const response = await request.json();

        if (response.success) {
            return {
                error: false,
                success: true,
                message: response.message,
                data: response.data
            }
        }

        else {
            return {
                error: false,
                success: false,
                message: response.message
            }
        }





    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}