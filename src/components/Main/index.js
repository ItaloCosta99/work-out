import './style.css';
import closeerIconDark from '../../image/svg/closeer-dark.svg';
import { WelcomeHeader } from './WelcomeHeader';
import { Form } from './Form';
import { Schedule } from './Schedule';

export function Main() {
  return (
    <main className="main-container">
      <div className="wrapper">
        <img id="closeerIconDark" src={closeerIconDark} alt="Closeer Ícone" />
        <WelcomeHeader />
        <Form />
        <Schedule />
      </div>
    </main>
  );
}