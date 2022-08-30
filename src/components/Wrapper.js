//higher order componets composition in react

function Wrapper (props){
   return(
    <div className="wrapper-main-div">
     
     {props.children}

    </div>
   );
}

export default Wrapper;