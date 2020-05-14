var app = new Vue({
    el: '#app',
    data : {
    maximum: 99,
    products : null,
    cart: []
    },
    methods: {
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