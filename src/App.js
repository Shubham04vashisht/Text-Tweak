import Navbar from "./components/Navbar";
import Txtform from "./components/Txtform";
import Alert from "./components/Alert";
import { useState } from "react";
function App() 
{
  const [mode, setMode] = useState("primary");
  const [btntxt, setBtnTxt] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);
  let showAlert = (msg,type) => {
    setAlert({
      type: type,
      message: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  let handleOnClick = () => {
    if (btntxt === "Enable DarkMode") {
      setBtnTxt("Enable LightMode");
      setMode("dark");
      document.body.style.backgroundColor = "#393939";
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setBtnTxt("Enable DarkMode");
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Success");
    }
  };
  return (
   <div>
      <Navbar title="textUtils" home="Home" about="About" mode={mode} txt={btntxt} click={handleOnClick}/>
      <Alert alert={alert} /> 
      <Txtform heading="Enter text to analyze-" mode={mode} showAlert={showAlert}/> 
   </div>
 );
}
export default App;