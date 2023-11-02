import Input from '../atoms/Input'
import Btn from '../atoms/Btn';


import './Buscador.css'

function Buscador({onChange, onBlur, onClick, alerta}) {

    return ( 
        <div className='BuscadorClass'>
            <div><h2>Ingrese la ciudad deseada</h2></div>
            <div className='InpClass'>
            <Input onChange={onChange} placeholder="Busca una ciudad" onBlur={onBlur} alerta={alerta}/>
            </div>
            <Btn nom="Guardar" onClick={onClick}/>
        </div>
     );
}

export default Buscador;