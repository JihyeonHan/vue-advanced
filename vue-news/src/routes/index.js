import Vue from "vue";
import VueRouter from "vue-router";
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from  '../utils/bus.js';
import {store} from "../store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path : url 주소
            path: '/news',
            name : 'news',
            // component : url 주소로 갔을때 표시될 컨포넌트
            component: createListView('NewsView'),
            beforeEnter : (to, from, next)=>{
                bus.$emit("start:spinner");
                // setTimeout(() => {
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        //bus.$emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter : (to, from, next)=>{
                bus.$emit("start:spinner");
                // setTimeout(() => {
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                      //  bus.$emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter : (to, from, next)=>{
                bus.$emit("start:spinner");
                // setTimeout(() => {
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                      //  bus.$emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
});
