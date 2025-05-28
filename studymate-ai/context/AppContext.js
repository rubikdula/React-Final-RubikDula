import React, { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');

    return (
        <AppContext.Provider value={{ user, setUser, theme, setTheme, language, setLanguage }}>
            {children}
        </AppContext.Provider>
    );
};