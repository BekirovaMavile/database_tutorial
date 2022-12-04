<template>
    <div class="mt-6">
        <div class="field">
            <label class="label">Product Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Name" v-model="productName" />
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" type="text" placeholder="Price" v-model="productPrice" />
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="saveProduct">SAVE</button>
        </div>
    </div>
</template>
   
<script>
// import axios
import axios from "axios";
import appConstants from '../appConstants';

export default {
    name: "AddProduct",
    data() {
        return {
            productName: "",
            productPrice: "",
        };
    },
    methods: {
        // Create New product
        async saveProduct() {
            try {
                let result = await axios.post(appConstants.HOST, {
                    product_name: this.productName,
                    product_price: this.productPrice,
                });
                console.log('Результат запроса')
                console.log(result)
                this.productName = "";
                this.productPrice = "";
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>
   
<style>

</style>
  