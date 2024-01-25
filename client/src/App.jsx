import './App.css'
import Routing from './Routing';
import Auth from './store/auth';

function App() {

  return (
    <>
      {/* <p>this is app.jsx</p> */}
      <Auth>
        <Routing></Routing>
      </Auth>
    </>
  )
}

export default App;
