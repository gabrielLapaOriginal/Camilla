import { useState, useEffect } from 'react'
import '../App.css'
import { CORE_DATES } from '../data';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function ImagePage() {
  const [indice, setIndice] = useState(0);
  const [carrousel, setCarrousel] = useState(true)

  const proximo = () => {
    setIndice((prev) => (prev + 1) % CORE_DATES.length)
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + CORE_DATES.length) % CORE_DATES.length);
  };

  const handleCarrousel = () => {
    setCarrousel(false)
  }

// coisas do relogio
const dataInicial = new Date("2021-09-11")

const [tempo, setTempo] = useState({
  anos: 0,
  dias: 0,
  horas: 0,
  minutos: 0,
  segundos: 0,
});

useEffect(() => {
  const intervalId = setInterval(() => {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    setTempo({ anos, dias, horas, minutos, segundos });
  }, 1000);

  return () => clearInterval(intervalId);
}, [dataInicial]);

  return(
  <>{carrousel ? <div className="content">
    <div className="box">
      {indice === 0 ? null :<button className="img_btn left" onClick={anterior}><FaArrowCircleLeft/></button>}

      <img src={CORE_DATES[indice]?.image} alt={CORE_DATES[indice]?.title} />
      <p>{CORE_DATES[indice]?.description}</p>

      {indice === 4 ? null : <button className="img_btn right" onClick={proximo}><FaArrowCircleRight/></button>}
    </div>
    {indice === 4 ? (<button onClick={handleCarrousel} className='btn_clock'>Clique aqui</button>) : null}
  </div> 
  :
  <div className='content'> 
    <div className='box'>
      <h3>Nós já namoramos a</h3>
      <p className='relogio'>
        {tempo.anos} anos, {tempo.dias} dias, {tempo.horas} horas, {tempo.minutos} minutos e {tempo.segundos} segundos.
      </p>
      <p>E não tem um dia se quer na minha vida que eu não agradeça por ter você ao meu lado, eu mal posso esperar para sermos nós dois contra o mundo de uma vez meu amor, hoje seu segredo de estado fica um pouco maior mas quero que saiba que independente de quanto tempo e quantos aniversários passemos juntos eu sempre irei lhe amar como no primeiro dia, esse site vai ficar como uma lembrança física de todo o tempo que nos amamos e esse contador nunca vai parar, talvez eu so tenha que mudar de namoro para casamento no futuro mas é algo que estou disposto a fazer, obrigado por simplesmente ser você meu amor, eu te amo, eu te vejo, eu te desejo e eu te muuuuuu.</p>
      <p>De: Gabriel</p>
      <p>Para o amor da minha vida: </p>
      <p>Camilla Christie (logo será lapa) Lopes de Albuquerque</p>
    </div>
  </div>}
    
  </>
  )
}