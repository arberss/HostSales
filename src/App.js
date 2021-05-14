import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Loading from './components/shared/Loading/Loading';
import ScrollToTop from './ScrollToTop';

// import Landing from './pages/Landing/Landing';
// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup';

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const PricingSales = lazy(() => import('./pages/PricingSales/PricingSales'));
const Login = lazy(() => import('./pages/Login/Login'));
const Signup = lazy(() => import('./pages/Signup/Signup'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/pricing-sales' component={PricingSales} />

          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />

          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
