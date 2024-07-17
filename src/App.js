
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Viewevent from './components/Viewevent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/registerevent" element={<Register/>}/>
        <Route path='/viewevent' element={<Viewevent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
