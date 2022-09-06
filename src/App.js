import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoutes } from './router';
import { DefaultLayout, Loading} from './components';
import { useEffect } from 'react';
import { useHeaderSlice } from './Features/hooks';

function App() {

  const [headerData, headerActs, dispatch] = useHeaderSlice()
  useEffect(() => {
    dispatch(headerActs.fetchAsyncAllPages())
  }, [])

  const isPending = headerData.isPending

  return (
    <div className="App relative">
      {isPending ? <div className="flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]  justify-center items-center"> <Loading/></div> :
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
                <Layout>
                  <Component/>
                </Layout>
              }
            >
            </Route>
          );
        })}
      </Routes>
      }
    </div>
  );
}

export default App;
