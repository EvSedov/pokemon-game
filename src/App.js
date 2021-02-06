import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import cn from 'classnames';

import s from './App.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyCTmvGQGw3UDu7vmvYOfH9TB2uirx4iTKE",
  authDomain: "pokemon-game-87ca9.firebaseapp.com",
  databaseURL: "https://pokemon-game-87ca9-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-87ca9",
  storageBucket: "pokemon-game-87ca9.appspot.com",
  messagingSenderId: "654869930714",
  appId: "1:654869930714:web:df02d303404f2999893be3"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
  console.log('####: snapshot', snapshot.val());
});

const App = () => {
  const match = useRouteMatch('/');
  return (
    <Switch>
      <Route path="/404" component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => (
                <Redirect to="/404"/>
              )}/>
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  )
}

export default App;
