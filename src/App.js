import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Landing from "./components/Landing";

function App() {
  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  return <main className="main">{isLoading ? <Loading /> : <Landing />}</main>;
}

export default App;
