import { Home, Shop } from "../pages";

export const publicRoutes = [
    {component: Home, path: '/home', layout: null},
    {component: Shop, path: '/shop', layout: null},
    {component: Shop, path: '/shop/womens', layout: null},
    {component: Shop, path: '/shop/mens', layout: null},
    {component: Shop, path: '/shop/kids', layout: null},
    {component: Shop, path: '/shop/womens/:id', layout: null},
    {component: Shop, path: '/shop/mens/:id', layout: null},
    {component: Shop, path: '/shop/kids/:id', layout: null},
]