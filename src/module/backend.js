import axios from 'axios';
import {tokenState} from "@/store/token/token";
import {getBackendPath} from "@/module/global";

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

class BadStatusError extends Error {
    constructor(msg, code) {
        super();
        this.message = msg;
        this.statusCode = code;
    }
}

class BadServeError extends Error {
    constructor(msg, code) {
        super();
        this.message = msg;
        this.statusCode = code;
    }
}

class ArticleClient {
    constructor(client) {
        this.client = client;
    }

    _proc(response) {
        if (response.status !== 200) {
            return Promise.reject(new BadStatusError("get error", response.status));
        } else if (response.data.code !== 0) {
            return Promise.reject(new BadServeError(response.data.error, response.data.code));
        } else {
            return undefined;
        }
    }

    _procOrData(response) {
        return this._proc(response) || response.data;
    }

    async post({title, intro, category, publishedAt}) {
        publishedAt = publishedAt || new Date().toISOString();
        let response = await this.client.wire.post('v1/article', {
            'title': title,
            'intro': intro,
            'category': category,
            'published_at': publishedAt,
        });
        return this._procOrData(response);
    }

    async get(id) {
        let response = await this.client.wire.get('/v1/article/' + id.toString());
        return this._procOrData(response);
    }

    async list() {
    }

    async put() {

    }

    async getContent(id) {
        let response = await this.client.wire.get('/v1/articles/' + id.toString() + ".md");
        if (response.status !== 200) {
            return Promise.reject(new BadStatusError("get error", response.status));
        }
        return response.data;
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
