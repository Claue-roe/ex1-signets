import './ListeSignets.scss';
import Signets from './Signets';
import tabSignets from "./data/signets.json";

export default function ListeSignets(props){
    return(
        <div className="ListeSignets">
        <ul>
        {tabSignets.map(signet => 
            <Signets
            key={signet.id}
            id={signet.id}
            titre={signet.titre}
            dateMod={signet.dateMod}
            />
        )}
        </ul>
    </div>
    );
}