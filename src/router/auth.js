
// import Register from '@/views/auth/Register';
// import Login from '@/views/auth/Login';
// import BackStage from '@/views/backstage/BackStage';

const register = {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register'),
    meta: {
        requireAuth: false,
    }
};
const login = {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login'),
    meta: {
        requireAuth: false,
    }
};
const backstage = {
    path: '/backstage',
    name: 'BackStage',
    component: () => import('@/views/backstage/BackStage'),
    meta: {
        requireAuth: true,
    }
};

const authIndices = [
    register, login, backstage,
];

authIndices.register = register;
authIndices.login = login;
authIndices.backstage = backstage;

export default authIndices;
export {authIndices};
