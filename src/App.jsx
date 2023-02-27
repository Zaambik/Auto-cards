import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppContext from './hooks/Context';

import Footer from './components/layouts/footer/Footer'
import Header from './components/layouts/header/Header';
import Home from './components/pages/home/Home';
import Catalog from './components/pages/catalog/Catalog';
import Contacts from './components/pages/contacts/Contacts';
import ProductPage from './components/pages/product-page/ProductPage';
import SearchResult from './components/pages/search-result/SearchResult';
import AdminPage from './components/pages/admin-page/AdminPage';

import { useAppDispatch } from './hooks/useRedux';
import Cookies from 'js-cookie';
import { refresh } from './redux/slice/authSlice';

import './App.css';

function App() {
   const [activePage, setActivePage] = useState('home');


      const dispatch = useAppDispatch();




      useEffect(() => {
         const accessToken = Cookies.get('accessToken');
         if (accessToken) {
            dispatch(refresh());
         }
      }, []);


   return (
      <AppContext.Provider value>
         <div className="App">
            <Header activePage={activePage} />
            <main>
               <Routes>
                  <Route path="/" element={<Home setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/catalog" element={<Catalog setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/contacts" element={<Contacts setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/catalog/:id" element={<ProductPage setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/search-result" element={<SearchResult setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/admin" element={<AdminPage setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="*" element={<> 👾404 Page not found👾 </>} />
               </Routes>
            </main>
            <Footer />
         </div>
      </AppContext.Provider>
   );

}

export default App;
