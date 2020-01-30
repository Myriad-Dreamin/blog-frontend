const list = {
    path: '/musics',
    name: 'Music',
    component: () => import('@/views/musical/Musics'),
    meta: {
        requireAuth: false,
    }
};

// const inspect = {
//     path: '/musics/:id',
//     name: 'Article',
//     component: () => import('@/views/music/Article'),
//     meta: {
//         requireAuth: false,
//     }
// };


const put = {
    path: '/backstage/put-music',
    name: 'PutMusic',
    component: () => import('@/views/musical/PutMusic'),
    meta: {
        requireAuth: true,
    }
};

const post = {
    path: '/backstage/post-music',
    name: 'PostMusic',
    component: () => import('@/views/musical/PostMusic'),
    meta: {
        requireAuth: true,
    }
};


const musicsIndices = [
    list, post, put,
];

musicsIndices.list = list;
musicsIndices.post = post;
musicsIndices.put = put;


export default musicsIndices;
export {musicsIndices};
