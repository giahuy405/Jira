import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
