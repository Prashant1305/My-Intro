import React, { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext();

function Auth(props) {
    const [isLogged, setLogged] = useState(localStorage.getItem("token") ? true : false);
    const [token, setToken] = useState(isLogged ? localStorage.getItem("token") : "");
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const userAuthentication = async () => {
        if (isLogged) {
            try {
                setIsLoading(true);
                const response = await fetch("http://localhost:5000/api/auth/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.msg);
                    setIsLoading(false);
                    // console.log(data);
                }
                else {
                    setIsLoading(false);
                    console.log("failed to load use data");
                }
            } catch (error) {
                console.log(`error in fetching: ${error}`);
            }
        }
        else {
            console.log('user logged out, so unable to fetch details');
        }

    };
    useEffect(() => { userAuthentication(); }, [isLogged]);

    return (
        <LoginContext.Provider value={{ token, setToken, isLogged, setLogged, user, isLoading }}>{props.children}</LoginContext.Provider>
    )
}

export function TokenContext() {
    return useContext(LoginContext);
}
export default Auth;