<template>
    <form class="form-horizontal" @submit.prevent="register">
        <div class="form-group row" :class="{'is-danger' : errors.has('name')}">
            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
            <div class="col-md-6">
                <input
                    v-model="name"
                    v-validate="{ rules: {required: true, min: 4}}"
                    id="name" type="text" class="form-control" name="name" required autofocus>
                <span class="help-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>
        </div>
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
            </div>
        </div>

        <div class="form-group row" :class="{'is-danger' : errors.has('password_confirmation')}">
            <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">Confirming</label>
            <div class="col-md-6">
                <input
                    v-model="password_confirmation"
                    id="password_confirmation" 
                    v-validate="{ rules: {required: true, min: 6, confirmed: this.password_confirmation}}"
                    type="password" class="form-control" name="password_confirmation" required>
                <span class="help-block" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    register
                </button>
            </div>
        </div>
    </form>
</template>


<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    },

    methods: {
        register() {
            // let formData = {
            //     name: this.name,
            //     email: this.email,
            //     password: this.password
            // };

            // this.axios.post('/api/register', formData).then(response => {

            // });
        }
    }
};
</script>

