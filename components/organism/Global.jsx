import './Global.css'
import { apiLocalConnect } from '../../connectApi';
import { useState } from 'react';
import Card from '../molecules/Card'
import Buscador from '../molecules/Buscador'

function Global() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [ubi, setUbi] = useState('');
    const [position, setPosition] = useState(1);
    var bandera;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubi}&appid=${API_KEY}`;
    const data = apiLocalConnect(url).weatherData;

    if(ubi === '' || data === false){
        bandera = true;
    }else{
        bandera = false;
    }

    const handlerUbi = (e) => {
        setUbi(e.target.value);
    }

    const click = () =>{
        if(!bandera){
            localStorage.setItem('posicionActual', position);
            localStorage.setItem(`${position}`, ubi);
            setPosition(position + 1);
            window.location.reload();
        }
    }

    //localStorage.clear()

    return (
        <div className="GlobalCont">
            <Buscador onChange={handlerUbi} onClick={click} alerta={bandera}/>
            {data ?(
                <Card info={data} />
            ) : (
                <p className='WarClass'><h1>Por ahora no hay nada :(</h1></p>
            )}
        </div>
    );
}

export default Global;