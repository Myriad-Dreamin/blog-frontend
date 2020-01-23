
import * as types from '@/store/MutationTypes';

export default {
    state: {
        transparentBackground: window.localStorage.getItem('transparent-background') || false,
    },
    mutations: {
        [types.FLIP_TRANSPARENT_BACKGROUND_STATE] (state) {
            state.transparentBackground = !state.transparentBackground;
            window.localStorage.setItem('transparent-background', state.transparentBackground);
        }
    }
};



