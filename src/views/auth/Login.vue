<template>
    <div>
        <navi-bar></navi-bar>
        <el-row>
            <el-col :span="6">
                <div class="placer"></div>
            </el-col>
            <el-col :span="12">
                <div style="height: 50px"></div>
                <div class="login-title">
                    <span>Login</span>
                </div>
                <el-divider></el-divider>
                <el-card class="box-card">
                    <div>
                        <label>
                            <input type="text" placeholder="name" class="input-boxer" v-model="name"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="password" placeholder="password" class="input-boxer" v-model="password"/>
                        </label>
                    </div>
                    <el-row>
                        <el-col :span="1"><div class="placer"></div></el-col>
                        <el-col :span="22">
                            <el-button class="input-button" v-on:click="login">Login</el-button>
                        </el-col>
                        <el-col :span="1"><div class="placer"></div></el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6">
                <div class="placer"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import MainNavibar from '@/components/navibars/MainNavibar.vue';
    import {tokenState} from "@/store/token/token";
    import {client} from '@/module/global';
    import {backStageIndices} from "@/router/back-stage";
export default {
    mounted() {
        console.log(this.axios);
    },
    data() {
        return {
            name: '',
            password: '',
        }
    },

    methods: {
        login() {

            client.auth.login({
                nick_name: this.name,
                password: this.password,
            }).then((data) => {
                tokenState.set(data.token);
                console.log(data['refresh_token']);
                console.log(data['name']);
                console.log(data['nick_name']);
                console.log(data['phone']);
                console.log(data['identity']);
                console.log(data);

                this.$router.push(backStageIndices.backstage);
            }).catch(
                (err) => {
                    this.$notify.error({
                        title: '登录失败(' + err.name + ')',
                        message: 'message: ' + err.message,
                    });
                }
            );
        }
    },

    components: {
        'navi-bar': MainNavibar
    }
};
</script>

<style scoped>
    .login-title, .input-tag {
        text-align: center;
        justify-content: center;
        -webkit-box-pack: center;
        font-size: 24px;
    }

    .el-card.box-card {
        background: rgba(255, 255, 255, 0.8);
    }

    .input-boxer {
        height: 40px;
        width: 90%;
        margin: 20px 0;
        padding-left: 5%;
        border: 0;
        border-bottom: solid 1px rgba(99, 107, 111, 0.33);
        background-color: rgba(0,0,0,0);
    }

    .el-button {
        /*background-color: rgba(0,0,0,0);*/
        /*border: solid 1px rgba(99, 107, 111, 0.33);*/
    }

    .input-button {
        height: 40px;
        width: 100%;
        margin: 20px 0;
        border: 1px solid rgba(99, 107, 111, 0.7);
        background-color: rgba(0,0,0,0);
        color: rgba(99, 107, 111, 0.7);
        font-size: 14px;
    }

    .input-button:hover {
        transition: all 0.1s linear;
        /*color: rgba(99, 107, 111, 0.5);*/
        border: 1px solid rgba(99, 107, 111, 0.5);
        background-color: rgba(0,0,0,0.01);
    }

    .input-boxer:focus {
        transition: all 0.1s linear;
        border-bottom: solid 1px rgba(25, 137, 250, 1);
    }

    ::-webkit-input-placeholder, ::-moz-placeholder, :-ms-input-placeholder, :-moz-placeholder {
        color: rgba(99, 107, 111, 0.7);
    }

    ::-webkit-input-placeholder:hover, ::-moz-placeholder:hover,
    :-ms-input-placeholder:hover, :-moz-placeholder:hover {
        transition: all 0.1s linear;
        color: rgba(25, 137, 250, 0.7);
    }

</style>
