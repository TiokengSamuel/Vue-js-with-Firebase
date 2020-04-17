<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img src="../imgs/macbook-air.jpeg" alt="" class="card-img-top img">
              <div class="card-body">
                <h5 class="card-titile">Mac Book Air</h5>
                <p class="card-text">
                  Complete your devices shelf for swift learning
                </p>
                <a href="#" class="btn btn-primary btn-product">Add to Cart</a>
              </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="../imgs/apple-iphone.jpg" alt="" class="card-img-top img-iphone">
            <div class="card-body">
              <h5 class="card-title">Iphone 6</h5>
              <p class="card-text">
                Style and speed. Go beyond traditional mobile phones
              </p>
              <a href="#" class="btn btn-primary btn-product">Add to cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="../imgs/macbook-air.jpeg" alt="" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">HP Laptop</h5>
              <p class="card-text">
                Style and speed. Go beyond traditional mobile phones
              </p>
              <a href="#" class="btn btn-primary btn-product">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .products {
    margin-top: 7rem;
    background: #f2f2f2;
    padding-bottom: 3rem;
  }
</style>
