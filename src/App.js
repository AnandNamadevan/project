 
 
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route element={<Login/>} exact path="" />

      
      </Routes>
    </HashRouter>
  );
}

export default App;
