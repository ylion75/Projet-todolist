import React, {useState} from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import ListForm from './Components/ListForm/ListForm'
import TaskForm from './Components/TaskForm/TaskForm'
import LoginForm from './pages/LoginPage'
import SidePanel from './Components/SidePanel/SidePanel'
import SignupForm from './Components/SignupForm/SignupForm'


function App() {
  const [token, setToken] = React.useState(
    window.localStorage.getItem("token")
  );

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {token ? <HomePage/> : <Redirect to="/login"/>}
        </Route>
        <Route path='/login' exact>
          <LoginForm
            onLoginSuccess={(token) => {setToken(token);}}
          />
        </Route>
        <Route path='/ListForm' exact component={ListForm} />
        <Route path='/TaskForm' exact component={TaskForm} />
        <Route path='/SidePanel' exact component={SidePanel} />
        <Route path='/signup' exact component={SignupForm} />      
      </Switch>
    </Router>
  )
}


export default App;
