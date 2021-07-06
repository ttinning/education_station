import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ParentDashboard from './containers/parent/ParentDashboard';
import StudentDashboard from './containers/student/StudentDashboard';
import QuizPage from './components/student/QuizPage';
import CompletionPage from './components/student/CompletionPage';

import DnDPage from './components/student/DnD/DnDPage';

import AudioGame from './components/student/AudioGame';

import Login from './components/Login/Login';
import useToken from './components/Login/useToken';

// function setToken(userToken) {
//   localStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = localStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {

  // const [token, setToken] = useState('')
  const {token, setToken} = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>    
      <Navbar></Navbar>
      <main>
        <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/parent' component={ParentDashboard} />
        <Route path='/student' exact component={StudentDashboard} />
        <Route path='/student/:topic' exact component={QuizPage}/>
        <Route path='/student/:topic/dnd' exact component={DnDPage}/>
        <Route path='/student/:topic/completed' component={CompletionPage}/>
        <Route path='/audiogame' exact component={AudioGame}></Route>
        </Switch>
      </main>
    </Router> 
    );
    
      
}

export default App;
