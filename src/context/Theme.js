//imorting createContext and use context
import { createContext,useContext } from "react";


// Custom hook to handle theme mode
export const ThemeContext = createContext({
    themeMode:'Light',//default
    darkTheme:()=>{ }, //dark theme
    lightTheme:()=>{},//light theme
});

// Provider component to wrap our app and set the theme mode
export const ThemeProvider = ThemeContext.Provider


//create a custom hook to handle theme mode
export default function useTheme(){
    return useContext(ThemeContext)
}