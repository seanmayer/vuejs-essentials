<template>
    <div>
      <h1>My Shop</h1>
      <NavBar
        :cart="cart"
        :cartQty="cartQty"
        :cartTotal="cartTotal"
        ></NavBar>
      <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
      <product-list :maximum="maximum" :products="products"></product-list>
    </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import NavBar from "./Navbar.vue";


export default {
    name:"products",
    components: {
        NavBar, PriceSlider, ProductList
    },
    props:[
        "products",
        "maximum",
        "cart",
        "cartQty",
        "cartTotal",
        "sliderStatus",
        "sliderState"
    ]
}
</script>