import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});