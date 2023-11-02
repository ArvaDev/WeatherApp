import './Input.css'

function Input({placeholder, onChange, onBlur, alerta}) {

    if(alerta){
        var styles = {
            border: 'solid 1px red'
        }
    }else{
        styles = {
            border: 'none'
        }
    }

    return ( <input className='InputClass' placeholder={placeholder} onChange={onChange} onBlur={onBlur} style={styles}></input> );
}

export default Input;