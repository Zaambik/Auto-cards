import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/layouts/footer/Footer'
import Header from './components/layouts/header/Header';
import Home from './components/pages/home/Home';
import Catalog from './components/pages/catalog/Catalog';
import Contacts from './components/pages/contacts/Contacts';

import './App.css';
import ProductPage from './components/pages/product-page/ProductPage';

function App() {
   const [activePage, setActivePage] = useState('home');

   return (
      <div className="App">
        <Header activePage={activePage} />

         <div className="main">
            <Routes>
               <Route path="/" element={<Home setActivePage={(page) => setActivePage(page)} />} />
               <Route
                  path="/catalog"
                  element={<Catalog setActivePage={(page) => setActivePage(page)} />}
               />
               <Route
                  path="/contacts"
                  element={<Contacts setActivePage={(page) => setActivePage(page)} />}
               />
               <Route
                  path="/catalog/:id"
                  element={<ProductPage setActivePage={(page) => setActivePage(page)} />}
               />
               <Route path="*" element={<>page not found</>} />
            </Routes>
         </div>

         <Footer />
      </div>
   );
}

export default App;
