<script>
export default {
    setToken(token) {
        window.localStorage.setItem('myd_token', token);
    },
    getToken() {
        return window.localStorage.getItem('myd_token');
    },
    removeToken() {
        window.localStorage.removeItem('myd_token');
    }
};
</script>
