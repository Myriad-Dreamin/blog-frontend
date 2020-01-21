/*jshint esversion: 6 */

import Axios from 'axios';
import {tokenState} from "@/store/token/token";


export default {
    actions : {
        loginRequest({dispatch}, formData) {
          //todo
            Axios.post('https://myriaddreamin.com:10777/api/adminlogin', formData).then(response => {
                tokenState.set(response.data.token);
                dispatch('setAuthAdmin');
                window.console.log(response);
            }, (error) => {
                window.console.log(error);
            });
        }
    }
};


