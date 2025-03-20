import PropTypes from 'prop-types';

function UserGreeting(props){
    // if(props.isLoggedIn){
        //     return <h2 className="welcome-message">Welcome {props.username}</h2>
        // }else{
            //     return <h2 className="login-prompt">Please log in to continue</h2>
            // }
            
    //oppure direttamente 
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    
    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Guest",
}

export default UserGreeting