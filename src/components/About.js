
import UserContext from "../customHooks/UserContext";
import User from "./User";
import UserClass from "./UserClass";




const About = ()=>{
    return(
        <>
        
        <h2>About food delivery</h2>
        {/* <div>loggedin user:
            <UserContext.Consumer>
                {(data)=> console.log(data)}
            </UserContext.Consumer>
        </div> */}
        <User name={"kanchan (function)"}/>
        <UserClass name={"jadon (class)"}/>
        </>
    )
}


export default About;