import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { create } from "@connext/sdk";
import { sdkConfig } from "./config";

const { sdkBase } = await create(sdkConfig);

function App() {

  const originDomain = "1735353714";
  const destinationDomain = "1735356532";

  useEffect(() => {
    let newVar = create(sdkConfig);
    console.log("foobar", newVar);
    sdkBase.estimateRelayerFee({
      originDomain,
      destinationDomain
    }).then(value => {
      console.log("estimateRelayerFee", value);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
