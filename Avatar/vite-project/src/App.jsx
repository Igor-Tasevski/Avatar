import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  return (
      <div>
       
          
              <Product 
              name = "Igor"
              age ={30}
              img ="https://st2.depositphotos.com/2703645/11476/v/450/depositphotos_114764296-stock-illustration-woman-avatar-character.jpg"
              isVerified = {true}
              
              
              
              />
            
          
      </div>
  )
}

export default App

