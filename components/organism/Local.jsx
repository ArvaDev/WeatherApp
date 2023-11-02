import { apiLocalConnect } from '../../connectApi'
import Card from '../molecules/Card';
import './Local.css';

function Local() {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const ciudad1 = localStorage.getItem(localStorage.getItem('posicionActual'));
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad1}&appid=${API_KEY}`;
    const data1 = apiLocalConnect(url1).weatherData;

    return (
        <div className="LocalWeatherClass">
            {data1 ? (
                <Card info={data1} />
            ) : (
                <p className='PClass'>No hay lugares favoritos</p>
            )}
        </div>
    );
}

export default Local;
