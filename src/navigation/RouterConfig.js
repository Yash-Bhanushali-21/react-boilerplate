import { Switch, Route, Link } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Errorpage from "../pages/Errorpage";
import APIFetchpage from '../pages/APIFetchpage';

const RouterConfig = () => {
    return (
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Error page</Link>
          </li>
          <li>
            <Link to="/fetch">API Fetch page</Link>
          </li>
        </ul>
       <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path = "/fetch">
            <APIFetchpage />
          </Route>
          <Route path = "*">
            <Errorpage />
          </Route>
       </Switch>
     </div>
     )
}

export default RouterConfig;