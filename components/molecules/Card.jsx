import './Card.css'

function Card({ info }) {

    const { visibility, name, main: { temp, temp_min, temp_max, humidity, pressure, feels_like }, weather: [arr], wind: {speed} } = info;

    return (
        <div className="CartContainer">
            <div className='Temp'>
                <img src={`https://openweathermap.org/img/wn/${arr.icon}@2x.png`} />
                <span className='Celsius'>{Math.trunc(temp - 273.15)}° C</span>
                <div className='NowClass'>
                    <h3>{arr.main}</h3>
                    <h5>{arr.description}</h5>
                </div>
                <div className='MaxAndMin'>
                    <h3>Max</h3>
                    <h5>{Math.trunc(temp_max - 273.15)}° C</h5>
                    <h3>Min</h3>
                    <h5>{Math.trunc(temp_min - 273.15)}° C</h5>
                </div>
            </div>
            <div className='Localidad'>
                <h1>{name} {info.sys.country}</h1>
                <div className='DataClass'>
                    <p><h3>Humedad</h3> <h4>{humidity} %</h4></p>
                    <p><h3>Visibilidad</h3> <h4>{visibility / 1000} Km</h4></p>
                    <p><h3>Presión</h3> <h4>{pressure} mbar</h4></p>
                    <p><h3>Sensación Termica</h3> <h4>{Math.trunc(feels_like - 273.15)}° C</h4></p>
                    <p><h3>Velocidad de viento</h3> <h4>{speed} Km/H</h4></p>
                </div>
            </div>
        </div>
    );
}

export default Card;