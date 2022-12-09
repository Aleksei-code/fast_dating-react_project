import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./router";

function App() {
    const router = createBrowserRouter(Router());

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
