import React from "react";
import { Check } from "react-feather";
import { X } from "react-feather";

const Item = ({ title, removeEle, addEle,  }) => {
  const [bgColor, setBgColor] = React.useState("#67e8f9");

  const handleAddEle = () => {
    // Change the color to a different one when Add is clicked
    setBgColor("#8aff82"); // You can set any color you prefer
    // addEle(bgColor);
  };
 
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "500px",
        backgroundColor: bgColor,
        // backgroundColor: "#67e8f9",
        padding: "5px",
        borderRadius: "10px",
        color: "#083344",
      }}
    >
      <h3>{title}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span onClick={removeEle}><X/></span>
        <span onClick={handleAddEle}><Check /></span>
      </div>
    </div>
  );
};

export default Item;
