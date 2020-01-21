/*jshint esversion: 6 */


// import Axios from 'axios';
import * as types from '@/store/MutationTypes';

export default {
    state: {
        authenticated: false,
        name: null,
        email: null,
    },
    //getters
    mutations: {
        [types.SET_AUTH_USER] (state, payload) {
            window.console.log('set auth user touched');
            state.authenticated = true;
            state.name = payload.name;
            state.email = payload.email;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        setAuthAdmin({dispatch}) {
            // Axios.get('/api/user').then(response => {
            //     commit({
            //         type: SET_AUTH_USER,
            //         user: response.data
            //     });
            //     window.console.log(response);
            // }, (error) => {
            //     window.console.log(error);
            // });
            this.commit(types.SET_AUTH_USER, {
                name: 'Myriad-Dreamin',
                email: 'camiyoru@gmail.com',
            });
        }
    }
};
