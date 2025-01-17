import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import LandingPage from "./pages/landingPage";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = () => (<Suspense fallback="loading ..."><Provider store={store}><LandingPage /></Provider></Suspense>);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)