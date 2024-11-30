import React, { useState } from "react";
import {
  FaLayerGroup,
  FaChevronDown,
  FaCircle,
  FaChartSimple,
  FaUser,
  FaCube,
  FaBook,
  FaChevronRight,
  FaHammer,
} from "react-icons/fa6";

const Sidebar = () => {
  const menu = [
    { title: "Dashboard", icon: FaLayerGroup, subitems: [] },
    {
      title: "Project",
      icon: FaChartSimple,
      subitems: [
        { title: "Project 1", icon: FaCircle },
        { title: "Project 2", icon: FaCircle },
      ],
    },
    {
      title: "Hammer",
      icon: FaHammer,
      subitems: [
        { title: "Hit", icon: FaCircle },
        { title: "Other", icon: FaCircle },
      ],
    },
    {
      title: "Books",
      icon: FaBook,
      subitems: [
        { title: "Article 1", icon: FaCircle },
        { title: "Article 2", icon: FaCircle },
      ],
    },
    {
      title: "Box (Pops Right)",
      icon: FaCube,
      subitems: [
        { title: "Option 1", icon: FaCircle },
        { title: "Option 2", icon: FaCircle },
        {
          title: "Option 3",
          icon: FaCircle,
          subitems: [
            { title: "Sub Option 1", icon: FaCircle },
            {
              title: "Sub Option 2",
              icon: FaCircle,
              subitems: [
                { title: "Level 3 Nesting", icon: FaCircle },
                { title: "Level 3 Nesting", icon: FaCircle },
              ],
              expandRight: true,
            },
          ],
          expandRight: true,
        },
      ],
      expandRight: true,
    },
    { title: "Account", icon: FaUser, subitems: [] },
  ];

  const [expandedPaths, setExpandedPaths] = useState([]);

  // Toggle Expansion by Path
  const toggleExpand = (path) => {
    setExpandedPaths(
      (prev) =>
        prev.includes(path)
          ? prev.filter((p) => p !== path) // Collapse if already expanded
          : [...prev, path] // Expand otherwise
    );
  };

  // Recursive Menu Rendering
  const renderMenu = (items, level = 0, parentPath = "") => {
    return (
      <ul
        className={`${level === 0 ? "mt-2" : "ml-6"} bg-gray-800 ${
          level > 0 ? "border-l border-gray-600" : ""
        }`}
      >
        {items.map((item, index) => {
          const path = `${parentPath}/${item.title}`;
          const isExpanded = expandedPaths.includes(path);
          const isRightPopup = item.expandRight;

          return (
            <li key={path} className="relative w-full px-3 py-1 text-gray-300">
              <a
                onClick={() => item.subitems?.length && toggleExpand(path)}
                href="#"
                className={`flex justify-between items-center px-4 py-3 hover:bg-gray-700 rounded-md`}
              >
                <span className="flex items-center">
                  {React.createElement(item.icon, { size: 20 })}
                  <p className="ml-4">{item.title}</p>
                </span>
                {item.subitems?.length > 0 &&
                  (isRightPopup ? (
                    <FaChevronRight size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  ))}
              </a>

              {isExpanded && item.subitems?.length > 0 && (
                <ul
                  className={`${
                    isRightPopup ? "absolute left-full top-0 w-48" : "ml-6 mt-2"
                  } bg-gray-800 shadow-md rounded-md`}
                >
                  {renderMenu(item.subitems, level + 1, path)}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="w-[280px] bg-gray-800 h-screen border-r border-gray-600 text-white">
      {renderMenu(menu)}
    </div>
  );
};

export default Sidebar;
