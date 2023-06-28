
import { useState } from "react";
import "./App.css";




import Temp from "./Temp";
import Analytics from "./Analytics";

function App() {
 
  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App ">
    

      <div className="lg:flex   bg-[#60A5FA]">
   
   <Temp/>
   <Analytics/>
  </div>
    </div>
  );
}

export default App;