import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HeaderCom from './components/HeaderCom.jsx';
import Home from './pages/Home';
import GlobalStyle from './components/style/Global.style.js';
import Result from './pages/Result.js';
function App() {
  return (
    <div className="App">
       <Router>
       <GlobalStyle />
        <HeaderCom />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/result' element={<Result/>}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
