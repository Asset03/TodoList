import { useState } from "react"

const useFetch = (callback) => {
    const [error,setError] = useState('')

    const fetching = async (...args) => {
        try {
            await callback(...args)
        } catch (error) {
            setError(error)
        }
    }
    
    return [fetching,error]
} 
export default useFetch;