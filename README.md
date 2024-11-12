
# Dark Theme Toggle with React Context API

This mini-project is a dark theme toggle built with React and the Context API. It allows users to switch between light and dark themes seamlessly. The project demonstrates state management across components without prop drilling, showcasing the power of the Context API.

## Features

- **Light/Dark Theme Toggle**: Users can switch between light and dark themes.
- **Global State Management**: Uses the Context API to manage theme state across the application.
- **Persistent Theme**: Saves the selected theme in `localStorage` so it remains after page reloads.
- **Responsive Design**: Adapted for both desktop and mobile views.

## Technologies Used

- **React** - For building the user interface.
- **Context API** - For managing global state.
- **CSS** - For styling the themes.

## Project Structure

- **ThemeContext**: Manages and provides the theme state to all components.
- **ThemeToggle Component**: Contains the toggle switch to change the theme.
- **App Component**: The root component where the `ThemeProvider` wraps the app.

## Key Concepts Covered

1. **Context API**: Utilized to create a global theme context.
2. **Custom Provider**: A `ThemeProvider` component to manage theme state.
3. **Local Storage**: Used to save the theme preference for persistence.
4. **Conditional Styling**: Dynamically applies theme styles based on the current theme state.

## ScreenShot
![Screenshot 2024-11-12 174511](https://github.com/user-attachments/assets/1209feb0-512c-435e-b2ce-58d59f7bf957)
![Screenshot 2024-11-12 174522](https://github.com/user-attachments/assets/7eca88f2-81d8-414e-b2da-4918c591a7ed)
