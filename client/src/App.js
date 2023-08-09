import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactForm from './pages/Contact';
import PageNotFound from './pages/Error';
import ChatBot from './pages/ChatBot';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import JSConverter from './pages/JSConverter';
import ImageGenerator from './pages/ImageGenerator';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path="/contact" element={<ContactForm />} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="*" element={<PageNotFound />} /> 
        <Route
                path="/chatbot"
                element={
                  <ProtectedRoute>
                    <ChatBot />
                  </ProtectedRoute>
                }
              ></Route>
                 <Route
                path="/paragraph"
                element={
                  <ProtectedRoute>
                    <Paragraph />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="summary"
                element={
                  <ProtectedRoute>
                    <Summary />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="image"
                element={
                  <ProtectedRoute>
                    <ImageGenerator />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="jsconverter"
                element={
                  <ProtectedRoute>
                    <JSConverter />
                  </ProtectedRoute>
                }
              ></Route>



      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
