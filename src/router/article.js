

const list = {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/article/Articles'),
    meta: {
        requireAuth: false,
    }
};

const inspect = {
    path: '/article/:id',
    name: 'Article',
    component: () => import('@/views/article/Article'),
    meta: {
        requireAuth: false,
    }
};


const put = {
    path: '/backstage/put-article',
    name: 'PutArticle',
    component: () => import('@/views/article/PutArticle'),
    meta: {
        requireAuth: true,
    }
};

const post = {
    path: '/backstage/post-article',
    name: 'PostArticle',
    component: () => import('@/views/article/PostArticle'),
    meta: {
        requireAuth: true,
    }
};


const articlesIndices = [
    list, post, put,
    inspect,
];

articlesIndices.list = list;
articlesIndices.inspect = inspect;
articlesIndices.post = post;
articlesIndices.put = put;


export default articlesIndices;
export {articlesIndices};
