import { useState, useContext } from "react";
import { loginUser } from "../../services/auth";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import cls from "./Login.module.scss"

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser(formData);
            login(userData);
            alert("Login successful");
        } catch (err) {
            console.error(err);
            alert("Login failed");
        }
    };

    return (
        <div className={cls.form}>
            <div>
                <h2>Login</h2>
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
                        <p onClick={() => navigate('/register')}>Register</p>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
