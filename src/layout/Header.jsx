//import React, { useContext } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';

const Header = () => {
    return (
    <div className="bg-slate-800 text-white flex items-center p-3">
      <button>
        <FaBarsStaggered size={20} />
      </button>
      <a href="#" className="flex px-3 py-3 items-center">
        <span className="ml-4 text-xl font-semibold">Sidebar App</span>
      </a>
    </div>
  );
};

export default Header;
