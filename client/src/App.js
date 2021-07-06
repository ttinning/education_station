import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ParentDashboard from './containers/parent/ParentDashboard';
import StudentDashboard from './containers/student/StudentDashboard';
import QuizPage from './components/student/QuizPage';
import CompletionPage from './components/student/CompletionPage';
import DnDPage from './components/student/DnD/DnDPage';
import AudioGame from './components/student/AudioGame';

function App() {
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
      </main>
    </Router> 
    );
}

export default App;