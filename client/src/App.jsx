
import './App.css'
import Layout from './Pages/Layout'
import Pomodromo from './Pages/Pomodromo'
import {Route,Routes} from "react-router-dom"



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Pomodromo />}/>
        </Route>
    </Routes>
    
    </>
  )
}

export default App
