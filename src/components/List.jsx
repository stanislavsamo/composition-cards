/* eslint-disable react/prop-types */
//import Card from "react-bootstrap/Card";

function List({ props, children }) {
    console.log(props[0], children);
  return (
    <>
      {children}
    </>
  );
}

export default List;
