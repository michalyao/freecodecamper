var Vue = require("vue")
var hello = require("./src/index.vue")

new Vue({
    el: "body",
    components: {
        hello: hello
    }
})