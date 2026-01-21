import { Link, useNavigate } from "react-router-dom";

const LoginSection = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-section">
      <h2>Sign In</h2>

      <label>Select Taluka</label>
      <select>
        <option>Select Taluka</option>
        <option>Salcete</option>
        <option>Bardez</option>
        <option>Ponda</option>
        <option>Quepem</option>
        <option>Pernem</option>
        <option>Bicholim</option>
        <option>Sattari</option>
        <option>Mormugao</option>
        <option>Canacona</option>
        <option>Tiswadi</option>
      </select>

      <label>Username</label>
      <input type="text" placeholder="Enter Username" />

      <label>Password</label>
      <input type="password" placeholder="Enter Password" />

      <label>Captcha</label>
      <div className="captcha-box">
        <input type="text" placeholder="Enter Captcha" />
        <span className="captcha-text">G7K2A9</span>
        <button type="button">Refresh</button>
      </div>

      <button onClick={handleLogin}>Login</button>

      <div className="login-links">
        <Link to="/register">New User? Register Here</Link>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default LoginSection;
