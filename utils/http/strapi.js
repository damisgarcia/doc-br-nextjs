import axios from 'axios'

const strapi = axios.create({
    baseURL: process.env.STRAPI_BASE_API
})

export default strapi