import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoutes } from './router';
import { DefaultLayout, Loading} from './components';
import { Suspense, useEffect } from 'react';
import { useHeaderSlice } from './Features/hooks';

function App() {


  return (
    <div className="App relative">
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        {PublicRoutes().map((route, i) => {
          const { component: Component, layout, path } = route;
          const Layout = layout === null ? DefaultLayout : layout;
          return (
            <Route
              key={i}
              path={path}
              element={
                <Suspense fallback={<div className="flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]  justify-center items-center"> <Loading/></div>}>
                  <Layout>
                    <Component/>
                  </Layout>
                </Suspense>
              }
            >
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
