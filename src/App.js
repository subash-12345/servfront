

import './mostpopular.css'
import './navbar.css'
import MostPopular from './component/body content/Mostpopular.js';
import Sidebar from './component/navbar/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MostPopular />
    </div>
  );
}

export default App;
