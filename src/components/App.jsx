import React from 'react';
import AppContainer from '../screens/app-container/AppContainer';
import Navigation from "../screens/main/Navigation";
import Sidebar from "../screens/main/Sidebar";
import Login from "./Login";

function App() {
  return (
    <div>
    {/* <Login /> */}
      <Navigation />
      <Sidebar />
      <AppContainer />
    </div>
  );
}

export default App;