import React from "react";



class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        return(
            <>
            <div>
                <h3>class based components</h3>
                <h3>{this.props.name}</h3>
                
            </div>
            </>
        )
    }
}


export default UserClass;