import './App.css'
import Home from './pages/Home'
import { GlobalDataProvider } from './Context'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <GlobalDataProvider>
    <BrowserRouter>
    <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
    </BrowserRouter>
    </GlobalDataProvider>
  );
}

export default App;
