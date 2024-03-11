import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
    const [userValue, setUserValue] = useState({
      initialInvestment : 10000,
      annualInvestment : 1200,
      expectedReturn : 0,
      duration : 10,
    });

    const inputIsValld = userValue.duration >=1;
    
    function handleChange(inputIdentifier,newValue) { 
      setUserValue((prevUserValue) =>{
          return{
              ...prevUserValue,
              [inputIdentifier]: +newValue,
          };
      });
    }
   
  return (
    <>
    <Header/>
   <UserInput onChangeInput={handleChange} userValue={userValue}/>

   {!inputIsValld && <p className="center"> Please enter a duration greater than zero.</p>}
   {inputIsValld && <Results  input={userValue} />}
    </>
  );
}

export default App
