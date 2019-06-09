<template>
    <form class="form-horizontal" @submit.prevent="login">
        <div class="form-group row" :class="{'is-danger' : errors.has('email')}">
            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
            <div class="col-md-6">
                <input
                    v-model="email"
                    v-validate="{ rules: {required: true, email: true}}"
                    id="email" type="text" class="form-control" name="email" required>
                <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{'is-danger' : errors.has('password')}">
            <label for="password"
            class="col-md-4 col-form-label text-md-right">Password</label>
            <div class="col-md-6">
                <input
                    v-model="password"
                    v-validate="{ rules: {required: true, min: 6}}"
                    id="password" type="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
                <span class="help-block" v-show="errorf!==''">{{errorf}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    login
                </button>
            </div>
        </div>
    </form>
</template>


<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            errorf: '',
        };
    },
    methods: {
        login() {
            let formData = {
                username: this.email,
                password: this.password,
            };
            
            // eslint-disable-next-line no-unused-vars
            this.$store.dispatch('loginRequest', formData).then((response) => {
                this.errorf = '';
                this.$router.push('/backstage');
            }, (error) => {
                if (error.response) {
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                    this.errorf = error.response.data.error_description;
                } else {
                    this.errorf = error.message;
                }
            });
        }
    }
};
</script>

