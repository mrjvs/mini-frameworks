import { render, useState } from "@/index"

function Button(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>click me</button>
}

function App() {
  const [num, setNum] = useState(0);

  return <div>
    <p>number: {num}</p>
    <Button onClick={() => setNum(n => n+1)}/>
  </div>
}

const dom = <App />;
render(dom, document.getElementById("app"));

const log = document.getElementById("log");
setInterval(() => {
  log.innerText = JSON.stringify(dom, null, 2);
}, 1);
