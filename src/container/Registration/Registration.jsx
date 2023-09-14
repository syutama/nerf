import './Registration.css';

const Registration = () => (
  <div className="app__registartion">
    <div className="app__registartion-heading">
      <h1 className="headtext__cormorant">NERF ARENA</h1>
      <p className="p__opensans_w">Register</p>
    </div>
    <div className="app__registartion-input flex__center">
      <input type="login" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button type="button" className="custom__button">Зарегистрироваться</button>
    </div>
  </div>
);

export default Registration;