import {FaUser,FaLock} from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import "./Login.css"


const Login = () => {

    
    const [username, setUsername] = useState("");
    
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


const handleSubmit = (event) =>{
  event.preventDefault();

    
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    
    if (username === savedEmail && password === savedPassword) {
      toast.success("Login realizado com sucesso!");
      
    } else {
      toast.error("E-mail ou senha inválidos. Tente novamente.");
      
    }
  };
  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-field"><input type="email" placeholder='E-mail' required onChange={(e) => setUsername(e.target.value) }/>
            <FaUser className="icon" />
            </div>
            
            <div className="input-field password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
          <span className="toggle-password" onClick={handleTogglePassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
            <div className="recall-forget">
                <label> <input type="checkbox" /> Lembrar de Mim</label>
                <p><Link to="Recuperar" >Esqueceu a senha?</Link></p>
            </div>

            <button type="submit">Entrar</button>
            <ToastContainer
position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true} 
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" 
      />
            
        <div className="signup-link">
          <p> Não tem uma conta?{" "}<Link to="/registro" >Registrar</Link></p>
        </div>
      </form>
      
    </div>
    
  );
};

export default Login
