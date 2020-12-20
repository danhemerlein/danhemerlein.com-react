import React from "react";

const Menu = (props) => {
  return (
    <h3 className="body-serif pointer" onClick={props.clickHandler}>
      menu
    </h3>
  )
}

export default Menu;
