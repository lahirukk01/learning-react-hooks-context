import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Child from "./Child";

function Page2(props) {
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname);

  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => history.push("/page1")}>Go to page 1</button>
      <Child />
    </div>
  );
}

export default Page2;
