import { useEffect, useRef, useState } from "react"

const useFetch = (url, options) =>{
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const urlRef = useRef(url);
    const optionsRef = useRef(url)

    useEffect(()=>{
        setLoading(true)
        console.log(optionsRef.current.headers)
        const fetchData = async () =>{
            await new Promise (r=> setTimeout(r, 3000))
            try{
                const response = await fetch(urlRef.current, optionsRef.current)
            const jsonResult = await response.json()
            setResult(jsonResult)
            setLoading(false)
            }
            catch(e){
                setLoading(false)
                throw e;
            }
        }
        fetchData()
    }, [url, options])

    return [result, loading]
  }
  export const Home = () =>{
    const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts', {
      headers:{
        abc:'1'
      }
    })
    if (loading){
        return <p>Loading...</p>
    }
    if (!loading && result){
        console.log(result)
    }
    return(
      <>
        <h1>Home</h1>
        <p>{result}</p>
      </>
    )
  }