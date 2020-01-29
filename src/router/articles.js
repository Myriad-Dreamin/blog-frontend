
import Articles from '@/views/article/Articles';
import Article from '@/views/article/Article';



const list = {
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: {
        requireAuth: false,
    }
};

const inspect = {
    path: '/articles/:id',
    name: 'Article',
    component: Article,
    meta: {
        requireAuth: false,
    }
};

const articlesIndices = [
    list,
    inspect,
];

articlesIndices.list = list;
articlesIndices.inspect = inspect;


export default articlesIndices;
export {articlesIndices};
