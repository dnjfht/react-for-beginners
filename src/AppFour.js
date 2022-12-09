import { useEffect, useState } from "react";

function Hello() {
  //   function byeFn() {
  //     console.log("bye :(");
  //   }

  //   function hiFn() {
  //     console.log("create :)");

  //     // 컴포넌트가 파괴될 때 function을 추가하고 싶다면 return
  //     return byeFn;
  //   }

  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

function AppFour() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prevShowing) => !prevShowing);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default AppFour;
