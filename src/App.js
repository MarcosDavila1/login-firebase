import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { config } from './utils/FirebaseUtil';
import { initializeApp } from "firebase/app";
import Home from './components/Home';

initializeApp(config)

function App() {
  return (
    <div className="App">
      <Route exact path={'/login'} component={Login}/>
      <Route exact path={'/register'} component={Register}/>
      <Route exact path={'/home'} component={Home}/>
    </div>
  );
}

export default App;
