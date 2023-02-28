import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import Archives from './pages/Archives'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  //Routes = Different webpages
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />  
        <div classname="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/archives"
              element={<Archives />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
