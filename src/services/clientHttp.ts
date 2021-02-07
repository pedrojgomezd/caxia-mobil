import axios from "axios";

const clientHttp = axios.create({
    baseURL:  "http://caxiaapi.devwithme.site/api/"
})

export default clientHttp