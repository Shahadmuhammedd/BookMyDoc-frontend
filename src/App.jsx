import './App.css'
import Header from './Components/Header'
import Admin from './Components/Admin'
import Footer from './Components/Footer'
import Details from './Components/Details'
import AllDoc from './Components/AllDoc'
import { Route, Routes } from 'react-router-dom'
import ViewDoc from './Components/ViewDoc'


function App() {
  return (
    <>
      <Routes>
        {/* localhost:5173 */}
        <Route path='/' element={<>
          <Header />
          <Admin/>
          <Details />
          <AllDoc/>
          <Footer />
        </>} />
        {/* localhost:5173/view/any_number */}
        <Route path='/view/:id' element={<>
          <Header />
          <br />
          <br /><br />
          <ViewDoc />
          
          <Footer />
        </>} />
      </Routes>
    </>
  );
}

export default App;
