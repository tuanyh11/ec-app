import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './router';
import { DefaultLayout } from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        {publicRoutes.map((route, i) => {
          const { component: Component, layout, path } = route;
          const Layout = layout === null ? DefaultLayout : layout;
          return (
            <Route
              key={i}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
