
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Uploader, Toast, Step, Steps } from 'vant';

import './assets/css/main.css'
// tailwindCss
import './assets/css/tailwind.css'
// vant
import 'vant/lib/index.css';

import VMdEditor from "@kangc/v-md-editor";
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import App from './App.vue'
import router from './router'

// highlightjs
import hljs from 'highlight.js';

const app = createApp(App)

const vantArr: any[] = [Button, Uploader, Toast, Step, Steps]

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

app.use(createPinia())
app.use(router)
app.use(VMdEditor)
vantArr.map((comp) => {
  app.use(comp)
})

app.mount('#app')
