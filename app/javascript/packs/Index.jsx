import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "../packs/components/Home";
import {MemoryRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import NavigationBar from "./components/navigation_bar";



document.addEventListener("DOMContentLoaded", () => {
 
const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
    <MemoryRouter>
        <NavigationBar/>
        <Home />
    </MemoryRouter>);
});
