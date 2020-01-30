
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

const authIndices = [
    register, login,
];

authIndices.register = register;
authIndices.login = login;

export default authIndices;
export {authIndices};
