
  import React, { useState,useEffect} from "react";
  import './Details.css'
  import {useParams} from 'react-router-dom'

  import ScrollReveal from 'scrollreveal'
 
   

  const Details = () => {
    

  
    const {id} = useParams()

    const [characters, setCharacters] = useState([])
    
    
   
    const Myfecth = async () => {
        const api = await fetch('https://nero800000.github.io/BleachPage/characters,json')
       const response = await api.json()
       setCharacters(response)

    }

    useEffect(()=> {
         Myfecth()
         ScrollReveal().reveal('.mandetail', {duration:2000})
     
      
  },[])

 
    
      return (
        <main className="mandetail">  
      
        <section>
  
            <h1 className="title-details">Details</h1>
            
            <ul> 
            {characters && characters.filter(item => item.id === id).map((character,index)=> {
              
            return(
              
              <> 
              
              <h1 className="characterName" >{character.name}</h1>
              <div className="Characterline">aa</div>
            
                 <li  className="character" key={index}>
               
                 <p className="bio">
                 <h1 className="titleBio">BIO</h1>
                  {character.bio}
                  </p>
                 <img className='imgCharr' src={character.profileImage} alt="tenis" />
             
             
                 </li> 
      
                 </>
                  
                 
              )   })}
              </ul>

              </section>
                  <div className="lineblack"></div>
                  {characters && characters.filter(item => item.id === id).map((character,index)=> {
              
              return(
                  
                   <>  
                  <h1 className="skil">SKILLS</h1>
            
                  <section className="sectionSkill">
             
                      <div className="card">     
                            <div className="MyImage"> 
                           <img className="skilBlock" src={character.Skill1} alt="getsuga" />
                      
                          
                           </div>
                           <div className="mytext">
                                <p className="description">
                                     {character.desc1}
                                </p>
                                
                              </div>
                         
                           </div>
                        
                      
                           <div className="card">
                            <div className="MyImage"> 
                           <img className="skilBlock" src={character.Skill2} alt="getsuga" />
                           
                           </div>
                           <div className="mytext">
                           <p className="description">
                           {character.desc2}
                                </p>
                              </div>
                        
                        
                           </div>
        
                           <div className="card">
                            <div className="MyImage toggle"> 
                           <img className="skilBlock" src={character.Skill3} alt="getsuga" />
                           
                           </div>
                           <div className="mytext">
                           <p className="description">
                           {character.desc3}
                                </p>
                              </div>
                                        
                           </div>
                  </section>
                  </>
                 )   })}

              
          </main>
              
        

      )
  }

  export default Details