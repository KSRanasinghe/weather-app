import './DynamicBox.css'
import WeatherImg from '../WeatherImg/WeatherImg'
import DetailBox from '../DetailBox/DetailBox'

function DynamicBox({ data }) {

  return (
    <>
      <div className='dynamic-box'>
        <WeatherImg weather={data.type} />
        <h1 className='temp'>{Math.round(data.temp)}°C</h1>
        <h2 className='city'>{data.city}</h2>
        <div className='bottom-row'>
          <DetailBox value={`${data.humidity}%`} name='Humidity'>
            <img src="humidity.png" className='state-img' />
          </DetailBox>
          <DetailBox value={`${data.speed} km/h`} name='Wind Speed'>
            <img src="wind.png" className='state-img' />
          </DetailBox>
        </div>
      </div>
    </>
  )
}

export default DynamicBox