import "./components.css";
import {createRef, useEffect, useState} from "react"
import Button from '@mui/material/Button';
import Input from '@mui/material/TextField';
import TextField from "@mui/material/TextField";


function BMIcalculator(){

    const[weight, setWeight] = useState('');
    const[height, setHeight] = useState('');
    const[BMI , setBMI] = useState('');
    const[message,setMessage] = useState('');
    
    // localStorage.setItem('score' , '10');

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
       <div className="container">
         <div>
        <div className="bmi-main-div">
            <h1>BMI Calculator</h1>
        </div>
        <div className="bmi-container">
        <div className="bmi-input">
            <TextField  type="number" value={weight}
             onChange={(e)=> setWeight(Number(e.target.value))}
             placeholder="weigth in kg" className="input-field" id="inpt1"/> <br />
            <TextField  type="number" value={height} 
            onChange={(e)=> setHeight(Number(e.target.value))}
             placeholder="height in cm" className="input-field"  id="inpt2"/>
            <Button className="btn-ref" ref={btnRef} onClick={calculateBMI}
            variant="contained" id="btn" >Claculate BMI</Button>
            <h3>Your BMI is :{BMI}</h3>
            <h3>{message}</h3>
             {/* <Button variant="contained">Hello World</Button>; */}

             {/* <Input id="outlined-basic" label="Outlined" variant="outlined" /> */}

            {/* <h1>{localStorage.getItem('score')} </h1> */}

        </div>
        </div>
        </div>
        </div>
    );
}
export default BMIcalculator ;