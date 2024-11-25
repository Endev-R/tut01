import React from 'react';
import './App.css';
import './components/dashboard_header/dashboard_header';
import './components/sidebar/sidebar';
import './pages/home/home';
// import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        <sidebar />
      </header>
    </div>
  );
}

export default App;
