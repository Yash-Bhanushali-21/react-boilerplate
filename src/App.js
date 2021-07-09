import { BrowserRouter as Router} from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";


function App() {
  return (
    <Router>
      <RouterConfig />
    </Router>
  );
}

/*similarly, we can create routes for other components as well.
Note, a single Home Page here is treated as a component as well.
Component Folder focuses explicitly on re-usable components.
*/

export default App;
