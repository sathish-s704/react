import { createContext} from 'react'
import './App.css'
import Cat from './cat'
import UseRef from './useref'
import UseState from './usestate' 
import Useeffect from './useeffect'
import Usestate from './usestate'
import Hen from './componenets/hen'
import Forms from './Forms'
import Stomach from './componenets/stomach'
import Button from './buttonb'

export let nameContext=createContext();


function App() {


  return (

   <nameContext.Provider value="water"> 
   <Hen />
  </nameContext.Provider>

   
  
  )
}

export default App