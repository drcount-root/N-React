import React, { useRef } from "react";
import "./App.css";

export default function App() {
  const referenceToHeading = useRef<HTMLInputElement>(null);

  if (referenceToHeading.current?.textContent) {
    sessionStorage.setItem(
      "headingInitial",
      referenceToHeading.current?.textContent
    );
  }

  const headingChangeOnMouseEnter = () => {
    if (referenceToHeading.current != null) {
      referenceToHeading.current.textContent = "Updated!";
    }
  };

  const headingChangeOnMouseLeave = () => {
    if (referenceToHeading.current != null) {
      referenceToHeading.current.textContent =
        sessionStorage.getItem("headingInitial");
    }
  };

  return (
    <React.StrictMode>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "50vh",
            gap: "30px",
          }}
        >
          <h2
            ref={referenceToHeading}
            onMouseEnter={headingChangeOnMouseEnter}
            onMouseLeave={headingChangeOnMouseLeave}
          >
            N-React
          </h2>
          <p style={{ fontSize: "12px" }}>Hover the text to change</p>
        </div>
      </>
    </React.StrictMode>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
