import { Routes, Route } from 'react-router-dom';
import Terms from './pages/Terms';
import DeleteData from './pages/DeleteData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Terms />} />
      <Route path="/delete-data" element={<DeleteData />} />
    </Routes>
  );
}

export default App;
