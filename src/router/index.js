import { Home, Shop } from "../pages";
import { useDataSlice } from "../Features/hooks";
import { useEffect } from "react";


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