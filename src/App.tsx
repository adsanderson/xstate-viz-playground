import * as React from "react";
import "./styles.css";
import { MachineViz } from "@xstate/viz";
import { useMachine } from "@xstate/react";
import { createMachine, State, interpret } from "xstate";

import "@xstate/viz/themes/dark.css";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
});

export default function App() {
  const [current, send] = useMachine(toggleMachine);
  return (
    <main className="App">
      <h1>XState vix test</h1>
      <button onClick={() => send("TOGGLE")}>Toggle</button>
      <MachineViz machine={toggleMachine} state={current} />
    </main>
  );
}
