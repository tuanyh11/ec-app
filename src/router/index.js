import { Home, Shop } from "../pages";

export const publicRoutes = [
    {component: Home, path: '/home', layout: null},
    {component: Shop, path: '/shop', layout: null},
    {component: Shop, path: '/shop/:id', layout: null},
    {component: Home, path: '/shop/product/:id', layout: null},
]