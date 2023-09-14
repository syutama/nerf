import './Profile.css';

const Profile = () => (
  <div className="app__profile">
    <div className="app__profile-heading">
      <h1 className="headtext__cormorant">NERF ARENA</h1>
      <p className="p__opensans_w">PROFILE</p>
    </div>
    <div className="app__profile-input flex__center">
      <input type="surname" placeholder="Фамилия" />
      <input type="name" placeholder="Имя" />
      <input type="patronymic" placeholder="Отчество" />
      <input type="birthday" placeholder="Дата рождения" />
      <input type="address" placeholder="Адрес" />
      <input type="phone" placeholder="Номер телефона" />
      <button type="button" className="custom__button">Редактировать</button>
    </div>
  </div>
);

export default Profile;