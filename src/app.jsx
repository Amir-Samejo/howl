import React from 'react';
import './app.css'
import About from './pages/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

export function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
