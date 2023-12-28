import { Route, Routes } from "react-router-dom";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Section } from "components/Section/Section";
import Header from './Header/Header'
import Register from "pages/Register/Register";
import LogIn from "pages/Login/Login";
import { useDispatch } from 'react-redux';
import { refreshThunk } from "store/auth/operation";
import { useEffect } from 'react';
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { PrivateRoute } from "routesConfig/PrivateRoute";
import { PublicRoute } from "routesConfig/PublicRoute";



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
                  <ContactList />
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