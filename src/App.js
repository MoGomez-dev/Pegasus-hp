import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Member } from './components/Member';
import { ScoreBook } from './components/ScoreBook';
import { Schedule } from './components/Schedule';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { BranchAdmin } from './components/BranchAdmin';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin/' element={<BranchAdmin />}/>
          <Route path='/member/' element={<Member />}/>
          <Route path='/scorebook/' element={<ScoreBook />}/>
          <Route path='/schedule/' element={<Schedule />}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
