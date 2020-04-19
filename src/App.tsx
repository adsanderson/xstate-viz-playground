import * as React from "react";
import "./styles.css";
import { MachineViz } from "@xstate/viz";
import { createMachine } from "xstate";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } }
  }
});

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MachineViz machine={toggleMachine} />
    </div>
  );
}
