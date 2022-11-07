import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bubblesort from './bubblesort/Bubblesort';
import Palindrome from './palindrome/Palindrome';
import Template from './template/Template';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Template></Template>}>

        <Route path='palidrome' element={<Palindrome></Palindrome>}></Route>
        <Route path='bubblesort' element={<Bubblesort></Bubblesort>}></Route>

      </Route>

    </Routes>
  );
}

export default App;
