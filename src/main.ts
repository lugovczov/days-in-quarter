import {createApp} from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Button from "./components/Button.vue";
import Result from "./components/Result.vue";

createApp(App)
    .component('Header', Header)
    .component('Button', Button)
    .component('Result', Result)
    .mount('#app')
