import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
// import FilmQueries from './Components/FilmQueries';
import { CharacterList } from "./Pages/CharacterList";
import Character_ID from "./Pages/Character_ID";
import Search from "./Pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryData from "./Pages/CustomerPage/CategoryData";
import Category_ID from "./Pages/CustomerPage/Category_ID";
import ProductData from "./Pages/ProductPage/ProductData";
import CreateProductComp from "./Pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/add" element={<CreateProductComp />} />
          <Route exact path="/category" element={<CategoryData />} />
          <Route exact path="/:id" element={<Category_ID />} />
          <Route exact path="/product" element={<ProductData />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
