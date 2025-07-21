import {Routes, Route,Navigate} from 'react-router-dom';
import Homepage from "./pages/homepage.jsx";


function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Homepage/>} />
          </Routes>
      </>
  )
}

export default App
