import React, { createContext } from 'react';

const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProviders;