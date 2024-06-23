import React, { useState } from "react";
import ComponentOne from "./main";
import ComponentTwo from "./main2";
import { GiSandwich } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
function ClickableItems() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "ComponentOne":
        return <ComponentOne />;
      case "ComponentTwo":
        return <ComponentTwo />;

      default:
        return null;
    }
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleClick("ComponentOne")}>
          <GiSandwich />
          Item One
        </li>

        <li onClick={() => handleClick("ComponentTwo")}>
          <FaLeaf />
          Item Two
        </li>
      </ul>
      <div>{renderActiveComponent()}</div>
    </div>
  );
}

export default ClickableItems;
