import { Route, Routes } from "react-router-dom";
import { ContactForm } from "pages/Contacts/ContactForm/ContactForm";
import { ContactsList } from "pages/Contacts/ContactsList/ContactsList";
import { Filter } from "pages/Contacts/Filter/Filter";
import { Section } from "pages/Contacts/Section/Section";
import Header from './Header/Header'
import Register from "pages/Register/Register";
import LogIn from "pages/LogIn/LogIn";
import { useDispatch } from 'react-redux';
import { refreshThunk } from "store/auth/operations";
import { useEffect } from 'react';
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { PrivateRoute } from "routes/PrivateRoute";
import { PublicRoute } from "routes/PublicRoute";



export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <>
              <PrivateRoute>
                <Section title={'Phonebook'}>
                  <ContactForm />
                </Section>
                <Section title={'Contacts'}>
                  <Filter />
                  <ContactsList />
                </Section>
              </PrivateRoute>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};