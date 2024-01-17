import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
    
    
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input 
                    type="text" 
                    name="displayname" 
                    required 
                    placeholder="Nome do usuário" 
                    value={displayName}
                    onChange={(e) => setDisplaynName(e.target.value)}
                />
                <span>E-mail: </span>
                <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="E-mail do usuário" 
                />
                <span>Senha: </span>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder="Insira sua senha" 
                />
                <span>Confirmação de senha: </span>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    required 
                    placeholder="Confirme a sua senha" 
                />
            </label>
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register