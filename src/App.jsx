
import { Link } from "react-router-dom";
import CustomRoutes from "./Routes/customRoutes";
import './App.css';



function App() {

  return (
    <> 
        <div className="outer-pokedex">
       <h1 id="pokedex-heading"><Link to="/">Pokedex</Link></h1>
      <CustomRoutes/>
      </div>
    </>
  );
}

export default App
