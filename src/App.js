import React from 'react';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';


import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import { FireBaseContext } from './context/firebaseContext';
import FirebaseClass from './service/firebase';

import cn from 'classnames';

import s from './App.module.css';
import 'react-notifications/lib/notifications.css';

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FireBaseContext.Provider value={ FirebaseClass }>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding
            })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/contact" component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404"/>
                )}/>
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </FireBaseContext.Provider>
  )
}

export default App;
