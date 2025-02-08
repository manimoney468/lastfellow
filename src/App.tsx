import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './components/Home';
import UserList from './components/UserList';
import AgentList from './components/AgentList';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="agents" element={<AgentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;