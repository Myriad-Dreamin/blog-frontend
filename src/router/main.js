// import Main from ;

const mainIndex = {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main'),
    meta: {
        requireAuth: false,
    }
};

export default mainIndex;
export {mainIndex};
