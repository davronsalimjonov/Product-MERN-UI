import { useState } from "react";
import { registerUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import cls from "./Register.module.scss"

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration successful");
      navigate('/login')
    } catch (err) {
      console.error(err);
      alert(err.response.data.message || "Registration failed");
    }
  };

  return (
    <div className={cls.form}>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p>Parol</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div>
            <p onClick={() => navigate('/login')}>Login</p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
