import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
        routes: [
            {
                path: '/',
                name: Home,
                redirect: {
                    name: "login"//arsyeja pse nHome n nav bar na kthen ne login
                }
            },
            {
                path: '/about',
                name: 'about',

                component: () => import('./views/About.vue')
    },
    {
        path: '/policies',
        name: 'policies',

        component: () => import('./views/Policies.vue')
},
{
    path: '/register',
    name: 'register',

    component: () => import('./views/Register.vue')
},
{
    path: '/riskDetails/:insType', //E NDRYSHUME!!!!
    name: 'riskDetails',

    component: () => import('./views/RiskDetails.vue')
},
{
    path: "/login",
    name: "login",
    // component: LoginComponent
    component: () => import('./views/Login.vue')
},
{
    path: "/secure",
    name: "secure",
    // component: SecureComponent
    component: () => import('./views/Secure.vue')
},
            {
                path: "/ShowPolicies",
                name: "/ShowPolicies",

                component: () => import('./views/ShowPolicies.vue')
            }




]
})
