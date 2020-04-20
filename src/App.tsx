import * as React from "react";
import "./styles.css";
import { MachineViz } from "@xstate/viz";
import { useMachine, useService } from "@xstate/react";
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
  const [current, send, service] = useMachine(toggleMachine);
  return (
    <main className="App">
      <h1>XState vix test</h1>
      <Toggle service={service} />
      <MachineViz machine={toggleMachine} state={current} />
    </main>
  );
}

function Toggle(props: { service: any }) {
  const [currentToggle, send] = useService(props.service);
  return (
    <>
      {currentToggle.matches("inactive") && <h1>Off</h1>}
      {currentToggle.matches("active") && <h1>On</h1>}
      <button onClick={() => send("TOGGLE")}>Toggle</button>
    </>
  );
}
