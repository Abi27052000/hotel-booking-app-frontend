
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/layout";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Layout><p>home page</p></Layout>}></Route>
        <Route path="/search" element= {<Layout><p>search page</p></Layout>}></Route>
        <Route path="*" element= {<Navigate to="/"/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
