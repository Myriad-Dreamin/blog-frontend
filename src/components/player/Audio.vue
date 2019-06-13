/*jshint esversion: 6 */

<template>
    <div v-on:click="showOnClick()" v-on:dblclick="playOnDoubleClick()" class="index">
        <div>
            <a class="name">{{ this.recommand.name }}</a><a style="margin:2px;"></a>
            <transition name="on-show-transition-tag">
                <a class="tag" v-show="this.isShow" transition="on-show-transition-tag">
                    {{this.recommand.category}}
                    <a v-show="this.isShow">/</a>
                    {{this.recommand.artist}}
                    <a v-show="this.isShow">/</a>
                    {{this.recommand.track}}
                </a>
            </transition>
        </div>
        <transition name="on-show-transition-comment"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <div ref="mcomment" class="comment" v-show="this.isShow">
                <p v-html="this.recommand.comment"></p>
            </div>
        </transition>
    </div>
</template>

<script>
import AudioX from './audiox.js';
import velocity from 'velocity-animate';
export default {
    name: 'AudioS',
    data () {
        return {
            player: AudioX,
            dbltimer: null,
            isShow: false,
        };
    },
    methods: {
        playOnDoubleClick() {
            this.dbltimer && clearTimeout(this.dbltimer);
            this.player.switchState(this.recommand.ref);
            
        },
        showOnClick() {
            this.dbltimer && clearTimeout(this.dbltimer);
            this.dbltimer = setTimeout(() => {
                this.isShow = !this.isShow;
            }, 200);
        },
        // eslint-disable-next-line no-unused-vars
        beforeEnter(el,done){
            el.style.height = '0px';
        },
        enter(el, done){
            velocity(el, { height: this.$refs.mcomment.scrollHeight }, { duration: 200 , complete: done});
        },
        // eslint-disable-next-line no-unused-vars
        beforeLeave(el,done){
            el.style.height = this.$refs.mcomment.scrollHeight;
        },
        leave(el, done) {
            velocity(el, { height: '0px' }, { duration: 200 , complete: done});
        }
    },
    props: ['recommand']
};
</script>

<style scoped>
    .index {
        -moz-user-select:none;/*火狐*/
        -webkit-user-select:none;/*webkit浏览器*/
        -ms-user-select:none;/*IE10*/
        -khtml-user-select:none;/*早期浏览器*/
        user-select:none;
        padding: 25px 10% 25px 10%;
        font-size: 18px;
        color: rgba(255, 255, 255);
        text-decoration: none;
        font-family: 'Source Han Serif CN', 'Source Han Sans CN', 'Source Han Serif SC', 'Microsoft YaHei' ,'-apple-system', 'SF UI Display', 'Arial',
        'PingFang SC', 'Hiragino Sans GB' , 'WenQuanYi Micro Hei', sans-serif;
    }
    .index:hover {
        background-color: rgba(255, 255, 255, 0.5);
        transition: all 0.2s;
    }
    .on-show-transition-tag-leave-active,.on-show-transition-tag-enter-active {
        transition:  all 0.2s linear; 
    }
    .on-show-transition-tag-leave-active,.on-show-transition-tag-enter {
        opacity: 0;
    }
    /* .on-show-transition-comment-leave-active,.on-show-transition-comment-enter-active{
        transition:  all 10s linear; 
    }
    .on-show-transition-comment-leave-active,.on-show-transition-comment-enter {
        opacity: 0;
        height:0px !important;
    }
    .on-show-transition-comment-leave,.on-show-transition-comment-enter-active {
        height: 20px;
        opacity: 1;
    } */
    .index .tag {
        font-size: 12px;
    }
    .index .comment {
        font-size: 14px;
        text-indent: 0em;
        height: 20px;
        overflow: hidden; 
    }
</style>

