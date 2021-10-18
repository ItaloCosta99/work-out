import { Status } from './Status';
import './style.css';

export function Schedule() {
  return(
    <div className="schedule-container">
      <div className="status-wrapper">
        <Status color="green"/>
        <Status color="red" />
        <Status color="yellow" />
      </div>
      <ul>
        <li><Status color="red"/> 10/Jan das 10h às 12h</li>
        <li><Status color="red"/>11/Jan das 19h às 20h</li>
        <li><Status color="yellow"/>15/Jan das 13h às 15h</li>
        <li><Status color="green"/>01/Fev das 15h às 20h</li>
        <li><Status color="green"/>02/Mar das 19h40 às 21h30</li>
        <li><Status color="green"/>28/Abr das 13h às 14h30</li>
        <li><Status color="green"/>03/Jun das 00h às 04h30</li>
        <li><Status color="green"/>02/Set das 17h às 22h</li>
        <li><Status color="green"/>18/Dez das 02h15 às 18h30</li>
      </ul>
    </div>
  );
}