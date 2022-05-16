import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = useState(allCategories)[0];
  const [value, setValue] = useState(0);

  const filterItems = (category, index) => {
    if (category === 'all') {
      setMenuItems(items);
      setValue(() => index);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    console.log(index)
    setValue(() => index);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} value={value} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
