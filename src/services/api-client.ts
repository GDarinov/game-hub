import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'e66c544b88a5443a893352d0c7311a5e'
    }
})