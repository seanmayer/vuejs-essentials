var app = new Vue({
    el: '#app',
    data : {
    inputWidth: 60,
    sliderStatus: true,  
    labelArr: ['font-weight-bold', 'mr-2'],
    maximum: 99,
    products : null,
    cart: []
    },
    computed:{
      sliderState: function(){
        return this.sliderStatus ? 'd-flex': 'd-none'
      }
    },
    methods: {
      beforeEnter: function(el) {
        el.className = "d-none";
      },
      enter: function(el) {
        var delay = el.dataset.index * 100;
        setTimeout(function(){
          el.className="row d-flex mb-3 align-items-center animated fadeInRight";
        }, delay);
      },
      leave: function(el) {
        var delay = el.dataset.index * 100;
        setTimeout(function(){
          el.className="row d-flex mb-3 align-items-center animated fadeOutRight";
        }, delay);
      },
      addItem: function(product){
        this.cart.push(product);
      }
    },
    mounted: function() {
      fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data =>{
        this.products = data;
      })
    }
    });