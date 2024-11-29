import React, { useState, useContext } from 'react';
import {
  FaLayerGroup, FaChevronDown, FaCircle, FaChartSimple,FaUser, FaCube, FaBook, FaChevronRight, FaHammer, 
} from 'react-icons/fa6';

const Sidebar = () => {
  const menu = [
    { title: 'Dashboard', icon: FaLayerGroup, subitems: [] },
    {
      title: 'Project',
      icon: FaChartSimple,
      subitems: [
        { title: 'Project 1', icon: FaCircle },
        { title: 'Project 2', icon: FaCircle },
      ],
    },
    { title: 'Hammer', icon: FaHammer, subitems: [
        { title: 'Hit ', icon: FaCircle },
        { title: 'Other', icon: FaCircle },
    ] },
    {
      title: 'Books',
      icon: FaBook,
      subitems: [
        { title: 'Article 1', icon: FaCircle },
        { title: 'Article 2', icon: FaCircle },
      ],
    },
    {
      title: 'Box (Pops Right)',
      icon: FaCube,
      subitems: [
        { title: 'Option 1', icon: FaCircle },
        { title: 'Option 2', icon: FaCircle },
        { title: 'Option 3', icon: FaCircle, subitems :[] },
      ],
      expandRight: true, // This will pop up to the right
    },
    { title: 'Account', icon: FaUser, subitems: [] },
  ];

  const [activeTab, setActiveTab] = useState(menu[0].title);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemTitle) => {
    setExpandedItem(expandedItem === itemTitle ? null : itemTitle);
  };

  return (
    <div className="w-[280px] bg-gray-800 h-screen border-r border-gray-600 text-white">
      <ul className="mt-2">
        {menu.map((item) => {
          const isRightPopup = item.expandRight;

          return (
            <li key={item.title} className="relative w-full px-3 py-1 text-gray-300">
              <a
                onClick={() => toggleExpand(item.title)}
                href="#"
                className="flex justify-between items-center px-4 py-3 hover:bg-gray-700 rounded-md"
              >
                <span className="flex items-center group-hover:text-white">
                  {React.createElement(item.icon, { size: 20 })}
                  <p className="ml-4">{item.title}</p>
                </span>
                {item.subitems.length > 0 && (isRightPopup ? <FaChevronRight size={14} /> : <FaChevronDown size={14} />)}
              </a>

              {expandedItem === item.title && item.subitems.length > 0 && (
                <ul
                  className={`${
                    isRightPopup ? 'absolute left-full top-0 w-48' : 'ml-6'
                  } bg-gray-800 shadow-md rounded-md`}
                >
                  {item.subitems.map((subitem) => (
                    <li key={subitem.title} className="py-2 px-4 hover:bg-gray-700">
                      <a
                        onClick={() => setActiveTab(subitem.title)}
                        href="#"
                        className={`flex items-center ${activeTab === subitem.title ? 'text-white' : 'text-gray-300'}`}
                      >
                        {React.createElement(subitem.icon, { size: 14 })}
                        <p className="ml-2">{subitem.title}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
