import './style.css';
import closeerIcon from '../../image/svg/closeer-light.svg';
import { Profile } from './Profile/index';

export function Header() {
  return (
    <header className="header-container">
      <div className="wrapper">
        <img className="closeer-icon" src={closeerIcon} alt="Closeer Ícone" />
        <h1 className="current-time">Hoje - 15 Janeiro de 2021 - 12:00</h1>
        <Profile />
      </div>
    </header>
  );
}