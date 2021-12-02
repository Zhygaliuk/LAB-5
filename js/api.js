const BASE_URL = "http://localhost:8080";
const RESOURCE_URL = `${BASE_URL}/hotel`;

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        
    }
};

export const getAllHotel = async () => {
    const rawRes = await baseRequest({ method: "GET" });

    return rawRes.json();
};

export const postHotel = (body) => baseRequest({
    method: "POST", body
});

export const updateHotel = (id, body) => 
baseRequest({ urlPath: `/${id}`, method: "PUT", body
});

export const deleteHotel = (id) => 
    baseRequest ({ urlPath: `/${id}`, method: "DELETE"
});