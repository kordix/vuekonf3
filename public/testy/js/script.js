Vue.component('test2',{
    props:['test1','test2','test3'],
    data(){
        return {

        }
    }
});

Vue.component('test',{
    props:['test1','test2','test3'],
    data(){
        return {

        }
    }
});



let app = new Vue({
    el: '#app',
    data: {
        imagesLoading: [],
        messages:[]
    },
    methods: {
        loadImage(src, id) {
            if(!this.UrlExists(src)){
                return
            }
            let self = this;
            this.imagesLoading.push(id);
            let image = new Image;
            image.onload = function (img) {
                let index = self.imagesLoading.indexOf(id);
                self.imagesLoading.splice(index, 1);
                document.body.appendChild(image);

            }
            image.src = src;

        },
        UrlExists(url) {
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status != 404;
        }

    },
    mounted() {
        // this.loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg', '1');
        // this.loadImage('https://upload.wikimedia.org/wikipedia/commons/d/dd/Big_%26_Small_Pumkins.JPG', '1');

        // this.loadImage('asdfafds', '1');

    },
    computed: {
        loading() {
            if (this.imagesLoading.length > 0) {
                return true
            } else {
                return false
            }
        }
    }
})





