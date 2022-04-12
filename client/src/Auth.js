import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'


function Auth({onLogin}) {

const [showLogin, setShowLogin] = useState(true)


    return (
        <div id="auth">
            { showLogin ? (
                <Login setShowLogin={setShowLogin} onLogin={onLogin}/>
            ) : ( 
                <SignUp setShowLogin={setShowLogin} onLogin={onLogin}/>

            )}
        </div>
    )
}

export default Auth

