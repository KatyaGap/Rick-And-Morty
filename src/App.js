import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>There is nothing here</div>} />
      </Routes>
    </div>
  );
}

export default App;
