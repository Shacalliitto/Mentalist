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
      <div class="container">
        <h1 class="page-title">
          Mentalista
        </h1>

        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-mentalista.svg" class="page-logo" alt="" />
        
        <p class="page-subtitle">
          Digite um número de 0 a 10
        </p>
        
        <div class="chute">
          <input class="input" type="number" id="valor" />
          
          <button class="btn" type="submit" onClick={Chutar}> Chutar </button>
          
          <h2 class="resultado" id="resultado"></h2>
        </div>
      </div>
    </>
  )
}
