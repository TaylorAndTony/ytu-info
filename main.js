const App = {
    data() {
        return {
            websites: [
                {
                    url: "https://weibo.com/ytu2014?is_hot=1",
                    name: "烟台大学官方微博",
                    icon: "https://www.ytu.edu.cn/images/favicon.ico",
                    description: "烟台大学的官方微博",
                },
                {
                    url: "https://tieba.baidu.com/f?ie=utf-8&kw=%E7%83%9F%E5%8F%B0%E5%A4%A7%E5%AD%A6&fr=search",
                    name: "烟台大学百度贴吧",
                    icon: "http://tb3.bdstatic.com/public/icon/favicon-v2.ico",
                    description: "烟台大学的百度贴吧，不是官方的嗷~",
                },
            ],
        }
    },
    mounted() {
    },
    methods: {
        urlopen(url) { 
            console.log(url);
            window.open(url);
        }
    }
};

const app = Vue.createApp(App);
const vm = app.mount('#app');