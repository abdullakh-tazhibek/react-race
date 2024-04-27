import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { Garage } from './components/Garage';
import { Winners } from './components/Winners';

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Main pages */}
      <Button
        className="App_garageBtn"
        type="primary"
        size="large"
        onClick={() => navigate('/garage')}>
        GARAGE
      </Button>
      <Button type="default" size="large" onClick={() => navigate('/winners')}>
        WINNERS
      </Button>

      {/* Routes */}
      <Routes>
        <Route path="/garage" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </div>
  );
}
