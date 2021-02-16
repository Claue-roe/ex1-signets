import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

export default function Appli() {
  return (
    <div className="Page">
      <Entete/>
        <section className="global">
          <ListeSignets/>
        </section>
      <button className="ajoutSignet">+</button>
    </div>
  );
}
