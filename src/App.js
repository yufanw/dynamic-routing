import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NameForm from './components/prompt/NameForm';
import PropsViewer from './components/PropsViewer';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/color/ColorSwatch';
import SmartColorSwatch from './components/color/SmartColorSwatch';
import LoggingHome from './components/logging/LoggingHome';
import ProtectedHome from './components/secure/ProtectedHome';
import PrivateRoute from './components/secure/PrivateRoute';
import People from './components/people/People'
import Login from './components/secure/Login';
import Logout from './components/secure/Logout';
import PersonProfileContainer from './containers/PersonProfileContainer';

const App = () => {

  return (
    <Router>
      <div className="main">
        <Header />
        <Sidebar />
        <div className="rightContentContainer">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/propsview" component={PropsViewer} />
            <Route path="/prompt" component={NameForm} />
            <Route path="/logging" component={LoggingHome} />

            <Route path="/people/:id" component={PersonProfileContainer} />
            <Route path="/people" component={People} />

            <Route path="/color/:text/:color" render={SmartColorSwatch} />
            <Route path="/color" render={() => {
              return <ColorSwatch color="red" text="Red" />
            }} />

            <PrivateRoute path="/protected" component={ProtectedHome} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />

            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};


export default App;