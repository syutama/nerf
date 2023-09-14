import './Login.css';

const Login = () => (
  <div className="app__login">
    <div className="app__login-heading">
      <h1 className="headtext__cormorant">NERF ARENA</h1>
      <p className="p__opensans_w">Log In</p>
    </div>
    <div className="app__login-input flex__center">
      <input type="login" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button type="button" className="custom__button">Войти</button>
    </div>
  </div>
);

export default Login;