import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App state = {state}/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))


