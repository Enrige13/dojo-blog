import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true) // loading the Data
    const [error, setError] = useState(null)

    useEffect(() => { // runs for every render
        const abortCont = new AbortController() // cleanup/stop the fetch

        console.log('use effect ran')
        setTimeout(() => { // Loading method to test
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that ressource')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => { // catch network error
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
        }, 1000)

        return () => abortCont.abort()
    }, [url]) // empty array, function only runs on the first initial render (once)

    return { data, isPending, error }
}

export default useFetch