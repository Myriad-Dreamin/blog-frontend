
import Register from '@/views/auth/Register';
import Login from '@/views/auth/Login';
import BackStage from '@/views/backstage/BackStage';

const register = {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
        requireAuth: false,
    }
};
const login = {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        requireAuth: false,
    }
};
const backstage = {
    path: '/backstage',
    name: 'BackStage',
    component: BackStage,
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
