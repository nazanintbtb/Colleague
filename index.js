import React, { useState, useEffect } from "react";
import Tabbar from "../tabbar";

function StickyComponent() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgOpacity = isSticky ? 0.7 : 1;

  return (
    <div
      className="sticky-component"
      style={{
        backgroundColor: `rgba(39, 43, 48, ${bgOpacity})`,
        padding: "10px",
        transition: "all 0.5s ease-in-out",
        position: isSticky ? "fixed" : "static",
        top: 72,
        left: 0,
        right: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Tabbar />
    </div>
  );
}

export default StickyComponent;
