import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SearchShows from './SearchShows/SearchShows';
import Season from './Season/Season';
import Episode from './Episode/Episode';

function App() {
  return (
   <div>
     <BrowserRouter>
      <Switch>
           <Route exact path='/' component={SearchShows} />
           <Route path='/season/:showid' component={Season}/>
           <Route exact path='/:showid/:seasonid/episode' component={Episode}/>
       </Switch>
     </BrowserRouter>
   </div>
  );
}

export default App;
