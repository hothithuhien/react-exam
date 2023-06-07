import './App.css';
import { useState } from 'react';
import Menu from './Exam/Menu';
export default function App() {
  const [menuState, setmenuState] = useState(false);
  function handletoggleMenu() {
    setmenuState(!menuState)
  }
  return (
    <div className="App">
      <div className='showbutton'>
        <button onClick={handletoggleMenu}></button>
      </div>
      <Menu menuState={menuState} handletoggleMenu={handletoggleMenu} />
    </div>
  );
}

