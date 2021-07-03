import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ParentDashboard from './components/parent/ParentDashboard';
import StudentDashboard from './components/student/StudentDashboard';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main>
        <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/parent' component={ParentDashboard} />
        <Route path='/student' component={StudentDashboard} />
        </Switch>
      </main>   
    </Router> 
    );
    
      
}

export default App;
