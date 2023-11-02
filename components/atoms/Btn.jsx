import './Btn.css'

function Btn({nom, onClick}) {

    return ( <button onClick={onClick} className="btn">{nom}</button> );
}

export default Btn;