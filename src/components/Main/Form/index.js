import './style.css';
import { FiCalendar } from 'react-icons/fi'

export function Form() {
  return (
    <form className="form-container" method="POST" action="">
      <input type="date" placeholder="Selecione uma data..." />

      <div>
        <input type="text" placeholder="Hora" />
        <span className="white-bar"></span>
        <input type="text" placeholder="Minuto" />
      </div>
      <div>
        <button className="form-button"><FiCalendar size="14" color="white" /><span className="white-bar"></span>Agendar</button>
      </div>
    </form>
  );
}