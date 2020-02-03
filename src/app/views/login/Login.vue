<template>
  <div id="login">
    <h1>{{ title }}</h1>
    <li><router-link to="/dashboard"> To Dashboard </router-link></li>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    title: 'Login',
  }),

  mounted() {
    console.log('gigi');
  },
};
</script>
