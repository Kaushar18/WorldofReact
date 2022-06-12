import React ,{ useState, createContext}from 'react'
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Layout1 from './Components/Layout/Layout1';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Search from './Components/Pages/SearchBar/Search';
import SearchVideo from './Components/Pages/SearchVideo/SeachVideo';
import SearchMovies from './Components/Pages/SearchMovies/SearchMovies';
import SearchMakeup from './Components/Pages/Makeup/SearchMakeup';
import Accordion from './Components/Pages/Accordion/Accordion';
import SearchWiki from './Components/Pages/SearchWiki/SearchWiki';
import Translate from './Components/Pages/Translate/Translate';
import SearchBooks from './Components/Pages/Books/SearchBooks';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
export const loginContext = createContext();
function App() {
    const [user,setUser] = useState(false);

    return (
        <div className="ui container app">
        <Header />
        <loginContext.Provider value={{user,setUser}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout1 /> } >
                <Route path="Home" element={<Home />} />
                <Route path="Images" element={<Search />} />
                <Route path="Video" element={<SearchVideo />} />
                <Route path="Movies" element={<SearchMovies />} />
                <Route path="Makeup" element={<SearchMakeup />} />
                <Route path="Wiki" element={<SearchWiki/>} />
                <Route path="Books" element={<SearchBooks />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="About" element={<About />} />
                <Route path="Translate" element={<Translate/>} />
                <Route path="Accordion" element={<Accordion/>} />
            </Route>
        </Routes>
        </BrowserRouter>
        </loginContext.Provider>
        <Footer />
        </div>
    )
}

export default App
