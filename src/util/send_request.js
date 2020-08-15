import axios from "axios"

//export const production = "http://localhost:4000/"//dev
export const production = "https://get-recall.herokuapp.com/"//production

const sendPost = (url, body, type) => {

    //if the body is empty, log it to the console
    if (typeof body !== "object" || body === null) return console.log("\nSENDPOSTREQ - INVALID PARAMETER SUPPLIED : \nThe body(second) parameter must be an object")

    if (type === "get") return axios.get(`${production}${url}`,

        {
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
            }
        }
    )
    
    else return axios.post(`${production}${url}`,

        body,

        {
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token")
            }
        }
    )

}

export default sendPost

