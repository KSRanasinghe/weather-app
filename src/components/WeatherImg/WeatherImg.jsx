import './WeatherImg.css'

function WeatherImg(props) {
  return (
    <div className="img-box">
      <img src={`${props.weather.toLowerCase()}.png`} className="weather-img" alt="waether-img" />
    </div>
  )
}

export default WeatherImg