import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        <Route path='/student/quiz/:topic' exact component={QuizPage}/>
        <Route path='/student/audio/:topic' exact component={AudioGame}></Route>
        <Route path='/student/dnd/:topic' exact component={DnDPage}/>
        <Route path='/student/:gameType/:topic/completed' component={CompletionPage}/>
        

        </Switch>
        <footer> <h2>© E49 CodeClan 2021</h2></footer>
      </main>
    </Router> 
    );
}

export default App;