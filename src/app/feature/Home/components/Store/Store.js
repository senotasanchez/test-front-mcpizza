import { IoIosHelp, IoMdSearch } from 'react-icons/io';
import React, { useEffect, useState } from 'react';

import CardStore from '../CardStore';
import Footer from '../Footer';
import Header from '../Header';

const Store = ({ stores = {}, removeAuth }) => {
  const [search, setSearch] = useState('');
  const [filterdData, setFilterdData] = useState({});

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilterdData(
      stores.filter((store) =>
        store.name
          .trim()
          .toLowerCase()
          .includes(search.trim().toLocaleLowerCase())
      )
    );
  }, [search, stores]);

  return (
    <>
      <div className='store-container showing'>
        <Header removeAuth={removeAuth}/>
        <section className='main-section'>
          <div className='category-section'>
            <ul>
              <li>Pizzerias</li>
            </ul>
          </div>
          <h3>Tiendas</h3>
          <p>Escoge tu pizzería favorita</p>
          <div className='bar-container'>
            <input
              type='text'
              className='search-bar'
              value={search}
              onChange={handleInputChange}
            />
            <IoMdSearch size={20} />
          </div>
        </section>
        <div className='restaurant-list'>
          {filterdData.length > 0 ? (
            filterdData.map((store) => <CardStore {...store} key={store.id} />)
          ) : (
            <div className='no-result-container'>
              <p> No se encontraron resultados</p>
              <IoIosHelp size={200} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Store;
