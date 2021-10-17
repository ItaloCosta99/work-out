import './style.css';
import closeerIconDark from '../../image/svg/closeer-dark.svg';
import { WelcomeHeader } from './WelcomeHeader';

export function Main() {
  return (
    <main className="main-container">
      <div className="wrapper">
        <img id="closeerIconDark" src={closeerIconDark} alt="Closeer Ícone" />
        <WelcomeHeader />
      </div>
    </main>
  );
}