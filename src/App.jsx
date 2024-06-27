import { useEffect, useState } from "react";
import Main from './components/Main'
import Side from './components/Side'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState(null)
  const [sideVisible, setSideVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSideToggle() {
    setSideVisible(!sideVisible)
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      try {
        const response = await fetch(url)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

    }
    fetchApiData()
    console.log("Data\n", data)
  }, [])

  return (
    <>
      {data ? (<Main data = {data}/> ) : (
        <div className="loading">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {
        sideVisible && 
        <Side sideVisible = {sideVisible} handleSideToggle = {handleSideToggle} data = {data}/>
      }
      {data && (
        <Footer sideVisible = {sideVisible} handleSideToggle = {handleSideToggle} data = {data}/>
      )}
    </>
  )
}

export default App