import React from "react";
import "./App.css";

const env = process.env.NODE_ENV;

function App() {
  const checkEnv = env => {
   if (env==='development') {
       return 'DEV'
   } else {
       return 'NON-DEV'
   }
  };

  return <React.Fragment> {checkEnv(env)} </React.Fragment>;
}

export default App;
