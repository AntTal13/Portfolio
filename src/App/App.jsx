import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  );
}
