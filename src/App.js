import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorInput from './components/ColorInput';
import Home from './components/Home';
import Input from './components/Input';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/:inputParam' element={<Input />} />
            <Route path='/:inputParam/:colorParam/:bgParam' element={<ColorInput />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
