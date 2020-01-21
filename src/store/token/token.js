

const tokenKey = 'myd_token';

const tokenState = {
    set(token) {
        window.localStorage.setItem(tokenKey, token);
    },
    get() {
        return window.localStorage.getItem(tokenKey);
    },
    remove() {
        window.localStorage.removeItem(tokenKey);
    }
};

window.xState = tokenState;

export {
    tokenState,
}
