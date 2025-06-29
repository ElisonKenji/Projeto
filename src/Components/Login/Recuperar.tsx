import {FaUser} from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Recuperar.css"


const Recuperar = () => {


   const [useremail, setemail] = useState("");
    
   const [emailSent, setEmailSent] = useState(false);

   const navigate = useNavigate();


const handleSubmit = (event) =>{
event.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");

    if (!savedEmail) {
      toast.error("Nenhum e-mail esta cadastrado no sistema", {
        className: "toast-error",
        autoClose: 4000,
        theme: "colored",
        
      });
      return;
    }

    if (useremail !== savedEmail) {
      toast.error("E-mail não encontrado no sistema.", {
        className: "toast-error",
        autoClose: 4000,
        theme: "colored",
        
      });
      return;
    }

    
    toast.success("Email enviado com sucesso!", {
        className: "toast-success",
        autoClose: 4000,
        theme: "colored",
        
      });
      setEmailSent(true)
    console.log("Email enviado com sucesso para:", useremail);

    
  };



  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <h1>Email de login</h1>
            <div className="input-field"><input type="email" placeholder='E-mail' required onChange={(e) => setemail(e.target.value) }/>
            <FaUser className="icon" />
            </div>

            
            
            {!emailSent ? (
          <button type="submit">Enviar</button>
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

export default Recuperar;
