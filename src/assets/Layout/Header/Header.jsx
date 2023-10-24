import React from "react";
import style from "./HeaderCss.css"
import LogoTitulo from "../../static/Iamgens/LogoTitulo.png";

const Header = (props) => {
  return (
    <>
    <div className="container">
      <div className="Header">
        <img className="LogoTitulo" src={props.LogoTitulo} alt="" />
        <ul className="Lista">
            <li>Sobre nós</li>
            <li>Para Você</li>
            <button className="BotaoRosa">Entrar</button>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header