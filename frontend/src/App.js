import './App.css';
// import Page from './home';
import Signin from './signup';
import Srkr from './login';
import Proj from './project';
import Prob  from './P1';
import Road from './road';
import Power from './power';
import Water from './water';
import Nature from './nature';
import Password from './forgot';
import { Pbstatement } from './sample';
import { Problem } from './pbsm';
import  { Input } from './collection/input/input';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Page/>}/> */}
     <Route path='/login' element={<Srkr/>}/>   
     <Route path='/p1' element={<Prob/>}/> 
     <Route path='/road'element={<Road/>}/>
     <Route path='/power'element={<Power/>}/>
     <Route path='/water'element={<Water/>}/>
  <Route path='/nature'element={<Nature/>}/>
     <Route path='/input'element={<Input/>}/> 
     <Route path ='/' element={<Proj/>}/>
     <Route path ='/signup'element ={<Signin/>}/>
     <Route path ='/fp'element ={<Password/>}/>
     <Route path ='/pb'element={<Pbstatement/>}/>
     <Route path='/p2' element={<Problem/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
