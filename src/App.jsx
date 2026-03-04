import { useState, useEffect } from 'react'
import './App.css'

// ✅ Use environment variable instead of hardcoded localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

function App() {
  const [forecasts, setForecasts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchForecasts = async () => {
      try {
        setLoading(true)
        // ✅ Now calls /service/weatherforecast through the ALB in production
        const response = await fetch(`${API_BASE_URL}/service/weatherforecast`)
        if (!response.ok) throw new Error('Failed to fetch forecasts')
        const data = await response.json()
        setForecasts(data)
      } catch (err) {
        setError('Error loading forecasts: ' + err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchForecasts()
  }, [])

  return (
    <>
      <div>
        <a href="https://www.nuware.com/" target="_blank">
          <img src="/logo.png" className="logo" alt="Nuware logo" />
        </a>
      </div>

      <h1>Welcome To Nuware Systems LLP</h1>

      <div className="card">
        <button onClick={() => setForecasts((f) => [...f, ...f])}>
          count is {forecasts.length}
        </button>
      </div>

      <div className="weather-container">
        <h3>🌤️ Weather Forecast</h3>
        {loading && <p>Loading forecasts...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {!loading && !error && (
          <div className="forecast-scroll">
            {forecasts.map((forecast, index) => (
              <div key={index} className="forecast-item">
                <div>{new Date(forecast.date).toLocaleDateString()}</div>
                <div>{forecast.temperatureC}°C / {forecast.temperatureF}°F</div>
                <div>{forecast.summary}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Nuware logo to learn more
      </p>
    </>
  )
}

export default App