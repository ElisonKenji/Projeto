
import {FaUser,FaLock} from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./Registro.css"
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const Registro = () => {

    
    const [username, setUsername] = useState("");
    
    const [password, setPassword] = useState("");

    const [confirmpass, setConfirmPass] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
   const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
     
    const [success, setSuccess] = useState(false);

const handleSubmit = (event) =>{

    event.preventDefault();
    if (password !== confirmpass) {
      toast.error("As senhas não coincidem. Por favor, verifique.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return; 
    }
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      toast.error("E-mail e senha não podem estar vazios.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
     localStorage.setItem("userEmail", trimmedUsername);
     localStorage.setItem("userPassword", trimmedPassword);

    toast.success("Cadastro realizado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    console.log("Cadastro realizado com sucesso:");
    console.log("Usuário salvo:", trimmedUsername);
    console.log("Senha salva:", trimmedPassword);

    setSuccess(true);
  };


  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <h1>Criar conta</h1>
            <div className="input-field"><input type="email" placeholder='E-mail' required onChange={(e) => setUsername(e.target.value) }/>
            <FaUser className="icon" />
            </div>
            
            <div className="input-field"><input  type={showPassword ? "text" : "password"} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" /> <span
            className="toggle-password"
            onClick={handleTogglePassword}
            style={{ cursor: "pointer" }}>{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span> 
            </div>
              
            <div className="input-field"><input type={showConfirmPassword ? "text" : "password"} placeholder='Confirmar Senha' onChange={(e) => setConfirmPass(e.target.value)} />
            <FaLock className="icon" /> <span
            className="toggle-password"
            onClick={handleToggleConfirmPassword}
            style={{ cursor: "pointer" }}>
            {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
          </div>
      
               
            {!success ? (
          <button type="submit">Registrar</button>
        ) : (
          <button type="button" onClick={() => navigate("/")}>
            Voltar para Login
          </button>
        )}
  
      </form>
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
    </div>
  );
};
  
  

export default Registro;
