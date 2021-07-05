import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ParentDashboard from './containers/parent/ParentDashboard';
import StudentDashboard from './containers/student/StudentDashboard';
import QuizPage from './components/student/QuizPage';
import CompletionPage from './components/student/CompletionPage';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main>
        <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/parent' component={ParentDashboard} />
        <Route path='/student' exact component={StudentDashboard} />
        <Route path='/student/:topic' exact component={QuizPage}/>
        <Route path='/student/:topic/completed' component={CompletionPage}/>
        </Switch>
      </main>   
    </Router> 
    );
    
      
}

export default App;
