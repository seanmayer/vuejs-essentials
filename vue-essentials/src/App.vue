<template>

   <div id="app" class="container mt-5">
      <h1>My Shop</h1>
      <NavBar
        :cart="cart"
        :cartQty="cartQty"
        :cartTotal="cartTotal"
        @toggle="toggleSliderStatus"
        @delete="deleteItem"
        ></NavBar>
      <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
      <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
      
   </div>

</template>

<script>
import ProductList from "./components/ProductList.vue";
import PriceSlider from "./components/PriceSlider.vue";
import NavBar from "./components/Navbar.vue";

export default {
  name: 'App',

  components: {
  ProductList,
  PriceSlider,
  NavBar
},
  data: function() {
          return{
            maximum: 99,
            sliderStatus: true,
            cart: [],
            products:null
          };
  },
  computed:{
      cartTotal: function(){
        let sum = 0;
        for (let key in this.cart) {
          sum = sum+(this.cart[key].product.price * this.cart[key].qty);
        }
        return sum;
      },
      cartQty: function(){
        let qty = 0;
        for (let key in this.cart) {
          qty = qty + (this.cart[key].qty);
        }
        return qty;
      }
  },
  methods:{
            addItem: function(product) 
            {
              var whichProduct;
              var existing = this.cart.filter(function(item, index) {
                if (item.product.id == Number(product.id)) {
                  whichProduct = index;
                  return true;
                } else {
                  return false;
                }
                });
                if (existing.length) {
                this.cart[whichProduct].qty++
                } else {
                this.cart.push({product: product, qty: 1})
                }
            },
            deleteItem: function(id) {
                if(this.cart[id].qty>1) {
                  this.cart[id].qty--;
                } else {
                  this.cart.splice(id, 1);
                }
              },
            toggleSliderStatus: function() {
                this.sliderStatus = !this.sliderStatus;
            }
          },
   mounted: function() {
      fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data =>{
        this.products = data;
      });
   }
};
</script>

<style>

</style>
