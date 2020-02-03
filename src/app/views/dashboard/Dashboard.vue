<template>
  <div id="dashboard">
    <h1>Dashboard</h1>
    <li><router-link to="/"> To Login </router-link></li>

    <img :src="cliff" alt="" />
  </div>
</template>

<script>
import cliff from '../../../statics/images/cliff.jpg';

export default {
  data: () => ({
    cliff,
  }),
};
</script>
