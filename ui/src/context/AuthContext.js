import axios from 'axios';
import React,{createContext, useContext, useEffect, useState} from 'react'
import auth from "../apis/modules/auth";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState(undefined);

    async function getLogged(){
        const loggedInRes = await auth.currentUser();
        setloggedIn(loggedInRes.data.data);
    }

    useEffect(() => {
        getLogged();
    }, [])

    return <AuthContext.Provider value={{loggedIn, getLogged}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
export {AuthContextProvider}