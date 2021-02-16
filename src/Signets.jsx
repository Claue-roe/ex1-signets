import './Signets.scss';

export default function Signets(props){ 
    return(
        <li className="Signets">
            <img className="imgSignet" src={'img-signets/' + props.id + '.png'} alt={props.titre}/>
            <h2 className="titre">{props.titre}</h2>
            <p className="dateMod">Modifié :{props.dateMod}</p>
            <button className="Options">...</button>
        </li>
    );
}