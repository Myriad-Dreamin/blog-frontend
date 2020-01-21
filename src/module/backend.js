import axios from 'axios';
import {tokenState} from "@/store/token/token";

const BaseURLPolicy = {
    AlwaysGet: 1,
    GetOnce: 2,
};

let authInterceptor = {
    onFullFilled(config) {
        if (tokenState.get()) {
            config.headers.Authorization = 'Bearer ' + tokenState.get();
        }
        return config;
    },
    onRejected(error) {
        return Promise.reject(error);
    },
};

function getURL(g) {
    if (g instanceof String) {
        return g
    }
    return g();
}

class ArticleClient {
    constructor(client) {
        this.client = client;
    }

    async post({title, intro, category, publishedAt}) {
        console.log(title, intro, category, publishedAt);
        publishedAt = publishedAt || new Date().toISOString();
        return await this.wire.post('v1/article', {
            'title': title,
            'intro': intro,
            'category': category,
            'published_at': publishedAt,
        });
    }

    async get() {

    }

    async list() {

    }

    async put() {

    }

    async getContent() {

    }
}

class Client {
    constructor({baseURLGetter, policies}) {
        // todo
        this.policies = policies || {
            BaseURLPolicy: BaseURLPolicy.GetOnce,
        };
        this.wire = axios.create({
            baseURL: getURL(baseURLGetter),
        });
        this.wire.interceptors.request.use(authInterceptor.onFullFilled, authInterceptor.onRejected);
        this.article = new ArticleClient(this);
    }

}

export {Client, authInterceptor};
