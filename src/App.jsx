import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
