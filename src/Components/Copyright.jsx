import React from "react";

function Copyright() {
  const year = new Date().getFullYear();

  return (
    <>
      <p className="copyright-text">&copy;&nbsp;&nbsp;{year}</p>
    </>
  );
}

export default Copyright;
