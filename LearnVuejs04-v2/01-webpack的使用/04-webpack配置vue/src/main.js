const {add,mul} = require('./mathUtils.js')


console.log(add(10, 22));
console.log(mul(11, 10));

require("./css/normal.css")
require("./css/special.less")
document.write('<h2>bbbbbbbb</h2>')


//使用vue
import Vue from 'vue'
import App from './vue/app'

new Vue({
    el: '#App',
    template: '<App/>',
    components: {
        App
    }
})
