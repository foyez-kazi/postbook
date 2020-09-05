import { useState, useEffect } from 'react'

export const useFetchData = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchPost = async (url) => {
      const fetchedData = await (await fetch(url)).json()
      setData(
        Array.isArray(fetchedData) ? fetchedData.slice(0, 10) : fetchedData,
      )
    }

    fetchPost(url)
  }, [url])

  return data
}
