import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  var secret = getRandomInt(10);
  console.log(secret)

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  
  if (chute == secret) {
    resultado.innerHTML = "Você acertou!";
  } 
  else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Insira um numero de 0 a 10";
  } 
  else {
    resultado.innerHTML = "Você errou 😔";
  }
}

  return (
    <>
      <div className="container">
        <h1 className="page-title">
          Mentalista
        </h1>

        
        
        <p className="page-subtitle">
          Digite um número de 0 a 10
        </p>
        
        <div className="chute">
          <input className="input" type="number" id="valor" />
          
          <button className="btn" type="submit" onClick={Chutar}> Chutar </button>
          
          <h2 className="resultado" id="resultado"></h2>
        </div>
      </div>
    </>
  )
}
