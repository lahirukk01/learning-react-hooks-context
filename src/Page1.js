import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function Page1(props) {
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname);

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => history.push("/")}>Go to page 2</button>
    </div>
  );
}

export default Page1;
