import { useState, useEffect } from "react";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const paginate = followers => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getProducts = async () => {
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { loading, data }
}