import {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {


  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Router>
    
    </div>
  );
}

export default App;
