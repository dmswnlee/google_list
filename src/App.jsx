import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
}

export default App;
