import useSWR from 'swr'

//const baseURL = process.env.baseURL
const baseURL = 'http://localhost:3000/api/posts';

const response = (...args) => fetch(...args).then(res=>res.json())

export default function fetcher(){
    const {data,error} = useSWR(`${baseURL}`,response)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}