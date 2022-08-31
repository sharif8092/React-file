import React from "react"

//1.Mounting = constructor -> getDerivedStatesFromProps -> render -> componentDidMount
//2.Updating = getDerivedStatesFromProps ->shouldCompontUpdate -> render -> getSnapshotBeForUpdate -> componentDidUpdate 
//3.UnMounting= componentWillUnmont

class ClassBasedComponents extends React.Component{
  constructor(props) {
    super(props);
    console.log('Inside Constructor');
    this.state ={
      name:"sharif",
      age:"23",
    }
    
  }

  componentDidMount(){
     console.log('Inside componetDidMount');
     //it is similar like useEffect with empty array
  }
  shouldComponentUpdate( nextprops, nextstate){
          return true/false;
  }
  componentDidUpdate(prevProps, prevState){
     
  }

  componentDidMount(){
    console.log('component unmount call');
  }



  render(){
    console.log('Inside Render');
    return(
      <><h1>Class Based Components</h1>
         <h4 style={{color:"blue"}} >1.Mounting  </h4>
         <h4>
           (constructor  - render - componentDidMount) </h4>
            <h4 style={{color:"blue"}} > 2.Updating  </h4>
           <h4> (shouldComponentUpdate - render - componentDidUpdate ) </h4>
            <h4 style={{color:"blue"}} > 3.UnMounting </h4>
           <h4>(componentWillUnmont)</h4>

           <h3>my name is {this.state.name} and age is {this.state.age} </h3>
      </>

    )
  }
  
}
export default ClassBasedComponents;