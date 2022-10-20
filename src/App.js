import {getAuth} from "firebase/auth"
import './App.css';
import Register from "./components/Register/Register";
import app from "./Firebase/firebase.init";

const auth = getAuth(app);

function App() {
  return (
    <div className="">
      <Register></Register>
    </div>
  );
}

export default App;
