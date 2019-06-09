/*jshint esversion: 6 */

import Axios from 'axios';
import MydToken from '@/views/auth/Helper';


export default {
    actions : {
        loginRequest({dispatch}, formData) {
            Axios.post('https://myriaddreamin.com:10777/api/adminlogin', formData).then(response => {
                MydToken.setToken(response.data.token);
                dispatch('setAuthAdmin');
                window.console.log(response);
            }, (error) => {
                window.console.log(error);
            });
        }
    }
};


