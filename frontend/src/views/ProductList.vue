<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-6">Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.product_id">
          <td>{{ item.product_name }}</td>
          <td>{{ item.product_price }}</td>
          <td class="has-text-centered">
            <router-link :to="{ name: 'Edit', params: { id: item.product_id } }" class="button is-info is-small">Edit
            </router-link>
            <a class="button is-danger is-small" @click="deleteProduct(item.product_id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
   
<script>
// import axios
import axios from "axios";
import appConstants from '../appConstants';

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get(appConstants.HOST);
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`${appConstants.HOST}/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
   
<style>

</style>
  