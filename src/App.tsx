import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-900 text-slate-200">
      <div className="flex min-h-screen flex-col ">
        <Navbar />
        <Hero />
      </div>
      <Preview />
    </div>
  );
}

export default App;
