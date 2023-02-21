import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';

import AppContext from './hooks/Context';
import { useAppDispatch } from './hooks/useRedux';
import { AuthService } from './services/auth.service';

import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home';
import Catalog from './components/pages/catalog/Catalog';
import Contacts from './components/pages/contacts/Contacts';
import ProductPage from './components/pages/product-page/ProductPage';
import SearchResult from './components/pages/search-result/SearchResult';
import AddProduct from './components/pages/add-product/AddProduct';
import { refresh } from './redux/slice/authSlice';

import './App.css';

function App() {
   const [activePage, setActivePage] = useState<string>('home');
   const dispatch = useAppDispatch()

   useEffect(() => {
      const accessToken = Cookies.get('accessToken');
      if (accessToken) {
         dispatch(refresh())
      }
   }, []);


   return (
      <AppContext.Provider value>
         <div className="App">
            <Header activePage={activePage} />

            <div className="main">
               <Routes>
                  <Route
                     path="/"
                     element={
                        <div className="home-page">
                           <Home setActivePage={(page) => setActivePage(page)} />
                        </div>
                     }
                  />
                  <Route path="/catalog" element={<Catalog setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/contacts" element={<Contacts setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/catalog/:id" element={<ProductPage setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/search" element={<SearchResult setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/catalog/add" element={<AddProduct setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="*" element={<>page not found</>} />
               </Routes>
            </div>

            <Footer />
         </div>
      </AppContext.Provider>
   );
}

export default App;
