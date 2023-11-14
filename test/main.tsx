import { Children, render } from "@/index"

function Button() {
  return <div>BTN: <p>Hello world</p></div>
}

function App() {
  const num = 42;

  return <div>
    <p>Hello world!</p>
    <p>This is the number: {num}!</p>
    <Button />
  </div>
}

render(<App />, document.getElementById("app"));
