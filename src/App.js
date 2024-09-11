import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [userinput, setuserinput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });
  const isinputvalid = userinput.duration >= 1;

  function handlechange(changedid, newvalue) {
    setuserinput((previnput) => {
      return { ...previnput, [changedid]: +newvalue };
    });
  }
  return (
    <>
      <Header />
      <UserInput userinput={userinput} onchange={handlechange} />
      {isinputvalid && <Result Userinput={userinput} />}
      {!isinputvalid && <p> Please enter duration above 0 </p>}
    </>
  );
}

export default App;
