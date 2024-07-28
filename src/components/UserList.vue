<template>
  <div class="container mt-5">
    <header class="header text-center mb-4">
      <h1>User Information</h1>
    </header>
    <div class="text-center mb-4">
      <button class="btn btn-fetch" @click="fetchUser">Fetch New User</button>
    </div>
    <div v-if="loading" class="skeleton-loader"></div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="user" class="card mx-auto">
      <img :src="user.picture.large" class="card-img-top" alt="User picture" />
      <div class="card-body">
        <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
        <p class="card-text">Email: {{ user.email }}</p>
        <p class="card-text">
          Location: {{ user.location.street.number }}
          {{ user.location.street.name }}, {{ user.location.city }},
          {{ user.location.state }}, {{ user.location.country }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      loading: false,
      error: "",
    };
  },
  methods: {
    async fetchUser() {
      this.loading = true;
      this.error = "";
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        this.user = data.results[0];
      } catch (error) {
        this.error = "Failed to fetch user. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style src="../assets/UserList.css"></style>
