
import { useEffect,useState,useRef } from 'react'
import "./home.css"
import api from '../../api'




function Home() {
  
  const [clientes,setClientes]=useState([])
  function getClicks(){
    var cards = document.querySelector(".like");
    cards.style.color ="darkred"
    
  }


  const inputName = useRef()
  const inputStats = useRef()

  

  
   
   
    
    
  useEffect(()=>{

    async function getUsers(){
       
      try {

        const  clientesApi =  await api.get(`maluco/getmaluco`)
        console.log(clientesApi.data)
       setClientes(clientesApi.data)
      } catch (error) {

        console.log(error)
      }
    }

    getUsers()
  },[])





  return (
    <div className="container">
      
    { clientes.map((client,index) =>(
      
      <div key={client.id} id="cardsContainer">
      <div  className='card'  >
        <p> {client.nome}</p>
        <span className="like" onClick={getClicks}>like</span>
       
    </div>
    </div>
        

    ))}

    </div>



  )
}

export default Home

