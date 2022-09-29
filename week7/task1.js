Vue.component('global',{
    template: '<div>Global</div>',
});
var component1 = {
    template: '<div><global></global>1</div>',
};
var component2 = {
    template: '<div><component1></component1>2</div>',
    components: {
        component1,
    },
};

var app = new Vue({
    el: '#app',
    data: {
        text: 'Good talk',
    },
    components:{
        component1,
        component2,
    },
});

