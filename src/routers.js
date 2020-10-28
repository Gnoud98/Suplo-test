import viewdetail from './components/viewdetail.vue'
import Home from './components/Home.vue'
export const routes = [  
    {
        path: '/viewdetail',
        name: 'viewdetail', 
        component: viewdetail
    },
    {
        path: '/home', 
        name: 'Home', 
        component: Home
    },
]