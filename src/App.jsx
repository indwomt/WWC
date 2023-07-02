import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  
  return (

    // add switch statement where content will change, leave out stuff that remains

    <>
    
  
  <Router>
    
    <Navbar />
    
    <Switch>

    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
    
    </Switch>

    <Footer />
</Router>
    
    </>
  )
}

export default App
