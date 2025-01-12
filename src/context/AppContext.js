import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [showHomePage, setShowHomePage] = useState(true);

    const value = {
        darkMode, setDarkMode,
        showHomePage, setShowHomePage
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
} 