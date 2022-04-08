import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalProvider from './context/GlobalState';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';

import appRoutes from './appRoutes';

/**
 * App
 * Handling web app routes
 * @returns routes
 */
export default function App() {
  return (
    <GlobalProvider>

      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            {appRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={
                    <Suspense fallback={<h1 className="loading">...</h1>}>
                      <route.element />
                    </Suspense>
                  }
                />
              );
            })}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
      
    </GlobalProvider>
  );
}
