import React from "react";

const Home = React.lazy(() => import('../pages/Home'))
const Shop = React.lazy(() => import('../pages/Shop'))

export const PublicRoutes = () =>{


    return [
        {component: Home, path: '/home', layout: null},
        {component: Shop, path: '/shop', layout: null },
        {component: Shop, path: '/shop/:id', layout: null },
        {component: Shop, path: '/shop/mens/:id', layout: null },
        {component: Shop, path: '/shop/kids/:id', layout: null },
        {component: Shop, path: '/shop/womens/:id', layout: null },
        {component: Home, path: '/shop/product/:id', layout: null},
    ]
}