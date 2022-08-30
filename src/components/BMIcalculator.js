import "./components.css";
import {createRef, useEffect, useState} from "react"

function BMIcalculator(){

    const[weight, setWeight] = useState('');
    const[height, setHeight] = useState('');
    const[BMI , setBMI] = useState('');
    const[message,setMessage] = useState('');


 const btnRef = createRef();
 useEffect(()=>{
       if(weight>0 && height>0){
        btnRef.current.disabled = false;
       } else{
        btnRef.current.disabled= true;
       }
 },[weight,height]);

 function calculateBMI(){
    const heightinM = height/100;
    const heightsq = (heightinM *heightinM)
    let BMI = weight/heightsq;
     BMI = BMI.toFixed(2);
     setBMI(BMI);
     console.log("hi")

     if(BMI <=18.4 ){
        setMessage("you are under weight");
     } else if (BMI >18.4 && BMI <=24.9){
        setMessage("You are healthy");
     } else if(BMI >24.9 && BMI <=39.9){
        setMessage("You are overweight");
     } else {
        setMessage("You are Obese");
     }
 }


    return(
       <>
        <div className="bmi-main-div">
            <h1>BMI Calculator</h1>
        </div>
        <div className="bmi-container">
        <div className="bmi-input">
            <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} placeholder="weigth in kg" />
            <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)} placeholder="height in cm" />
            <button className="btn-ref" ref={btnRef} onClick={calculateBMI}>Claculate BMI</button>
            <h3>Your BMI is :{BMI}</h3>
            <h3>{message}</h3>

        </div>
        </div>
        </>
    );
}
export default BMIcalculator ;