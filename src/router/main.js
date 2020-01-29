import Main from '@/views/Main';

const mainIndex = {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
        requireAuth: false,
    }
};

export default mainIndex;
export {mainIndex};
