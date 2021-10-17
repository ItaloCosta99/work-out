import './style.css';
import user from '../../../db.json';
import { GoVerified } from 'react-icons/go';
import { IoTimeOutline } from 'react-icons/io5';

export function Profile() {

  var userHeight = user.height;
  var formattedHeight = userHeight.substring(0, 1) + ',' + userHeight.substring(1, 3);

  return (
    <div className="profile-container">
      <img className="profile-picture" src={user.picture} alt="Foto do Usuário" />
      <div className="user-identification">
        <h1>
          <span>{user.first_name} {user.last_name} <GoVerified color="#02E2BD" size="14" /></span> 
        </h1>
        <h2>
          <span>{user.role}</span>
        </h2>
      </div>

      <div className="user-traits">
        <span className="physical-triats">Altura: {`${formattedHeight}m`}</span>
        <span className="physical-triats">Manequim: {user.size}</span>
        <span className="physical-triats">Calçado: {user.shoe}</span>
        
        <span className="platform-time"><IoTimeOutline size="18" /> Tempo na Closeer: 1.2 anos</span>
      </div>
    </div>
  );
}