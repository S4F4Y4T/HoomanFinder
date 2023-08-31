import { useState, useEffect } from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchFact()
    }, [])

    const fetchFact = () => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setIspending(false)
                setError(null)
                setData(data)
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                setIspending(false)
                setError(error.message)
                setData(null)
            });
    }

    const reFetchFact = () => {
        setIspending(true)
        setError(null)
        setData(null)

        fetchFact()
    }

    return {data, isPending, error, reFetchFact}
}

export default useFetch