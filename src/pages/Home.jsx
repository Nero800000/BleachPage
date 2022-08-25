import React, { useEffect, useState }  from 'react'
import  './Home.css'

import banner from '../helpers/main_03.jpg'
import Video from '../helpers/BleachVideo.mp4'
import {Link} from 'react-router-dom'
import IchigoBanner from '../helpers/BANNER.png'
import Navbar from '../components/NavBar'









const  Home = () => {
    const [characters, setCharacters] = useState([])
   
    


    const Myfecth = async () => {
        const api = await fetch('http://localhost:3000/BleachPage/characters,json')
       const response = await api.json()
       console.log("cade",response)
       setCharacters(response)

    }

    useEffect(()=> {
  
         Myfecth()
       
  },[])

 




    return (
        <div> 
          <Navbar/>
       
          <main > 
            <section className='section-one'>
                    
                    <h1 >BLEACH</h1>
                
                    <img className='banner' src={banner} alt="banner" />
                      <h1>BLEACH: ARCO DA GUERRA DOS MIL  ANOS!</h1>
                      <p>Guerra dos Mil Anos<br/> é o último arco de Bleach, <bt/>mostra a volta do rei Quincy, Yhwach, 
                        que após ser derrotado pela Sociedade das Almas, 
                        retorna com sede de vingança para derrotar<br/> os Ceifeiros da Morte e o Rei das Almas.</p>
                        <p>Arco final de Bleach, A Guerra Sangrenta de Mil Anos será levada <br/>ao anime em outubro de 2022. 
                        A história de Tite Kubo, que será retomada depois de dez anos, teve seu primeiro trailer divulgado - confira Abaixo.</p>
                         <video className='Video' src={Video} controls width="800" height="600">

                         </video>
            </section>
            <div className='line'></div>
            <section className='section-two'>
                <h1 className='title-characters'>CHARACTERS</h1>
                <ul className='characters'>
                     {characters && characters.map((char,index)=> {
                          return (
                               <> 
                                <li key={index}
                                 className='char' id='char'><p className='title'>{char.name} </p>
                                 <img  className='imgChar' src={char.image} alt="tenis" />
                                  <Link className='btn' to={`/details/${char.id}`}>Details</Link>
                                 </li>
                             
                                 </>
                             
                          )
                     })}
                      </ul>
            </section>
            <div className='line2'></div>
            <h1>HISTORIA</h1>
            <section className='section-three'>
              
              <div>  
              <img className='BannerIchigo' src={IchigoBanner} alt="ichigo" />
              </div>
                <p className='textHistory'>
                  <h1>PROLOGO</h1>
                A história de Bleach gira em torno de Ichigo Kurosaki,<br/> um adolescente que tem a capacidade de enxergar<br/> e interagir com os mortos, 
                até que em uma noite ele recebe <br/>a visita de uma shinigami 
                (entidade sobrenatural <br/>encarregada de purificar <br/>os espíritos malignos da Terra) 
                e devido a alguns acontecimentos, Ichigo<br/> se torna um SHINIGAMI
                </p>    
               
                   
            </section>
 
          </main>
          </div>

        )
}


export default Home