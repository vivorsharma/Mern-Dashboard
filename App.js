import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import Reports from './pages/Reports';
import Logs from './pages/Logs';
import Setting from './pages/Setting';
import AddEmployee from './pages/AddEmployee';

const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/"element={<Dashboard/>}></Route>
      <Route path="/dashboard"element={<Dashboard/>}></Route>
      <Route path="/employeeList"element={<EmployeeList/>}></Route>
      <Route path="/reports"element={<Reports/>}></Route>
      <Route path="/addEmployee"element={<AddEmployee/>}></Route>
      <Route path="/Logs"element={<Logs/>}></Route>
      <Route path="/setting"element={<Setting/>}></Route>
    </Routes>
    </Sidebar>
    </BrowserRouter>
   </div>
  );
};

export default App;

