import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Task from "./pages/Task";

import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import { Provider } from 'react-redux';
import store from 'task/store';

const App = () => (
    <Suspense fallback="loading ...">
        <Provider store={store}><Task /></Provider>
    </Suspense>);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)