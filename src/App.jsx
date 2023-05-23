import React from "react";
import axios from 'axios';
import { Provider } from "react-redux";
import Homepage from "./pages/Homepage";
import { store } from "./redux/store";

axios.defaults.baseURL = 'http://localhost:4000';

const App = () => {
    return (
        <Provider store={store}>
            <Homepage />
        </Provider>
    )
};

export default App;
