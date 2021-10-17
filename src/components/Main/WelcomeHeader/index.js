import './style.css';
import user from '../../../db.json';

export function WelcomeHeader() {
  return (
    <div className="welcome-header">
      <div>
        <h1>Bem-vindo(a), {user.first_name}</h1>
        <h3>Adicione seus jobs a agenda e gerencie sua rotina</h3>
      </div>
    </div>
  );
}