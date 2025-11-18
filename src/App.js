import logo from './logo.svg';
import './App.css';
import {NavigationBar} from "../src/components/common/layout/Navbar"; 
import { ExplorePage } from './pages/Explore';
import { SearchResults } from './pages/SearchFilters';
import { AboutLocation } from './pages/PageDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ExplorePage/>}></Route>
      <Route path='/search' element={<SearchResults/>}></Route>
      <Route path='/location/:id' element={<AboutLocation/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
