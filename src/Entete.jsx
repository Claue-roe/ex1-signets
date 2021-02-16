import './Entete.scss';

export default function Entete(props) {
    return(
        <header>
            <h3>Signets</h3>  
            <p className="nomUtil">Cool Gamer</p>
            <img className="iconUtil" src="img-signets/icon.png" alt="Icon" />
        </header>
    );
}