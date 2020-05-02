// import axios, { post, get, put } from 'axios';
const axios = require("axios");




const products = async () => {

    const result = await axios.get(
        'localhost:5000/api/projects'
        // {timeout: 4000},    // 4 seconds timeout
    )

    console.log(result);


    return result


};

products()