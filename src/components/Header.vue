<template>
  <div class="header">
    <div class="left">
      <img :src="logoSrc" alt="Agmatix" />
    </div>
    <div class="right">
      <router-link
        v-for="tab in tabLinks"
        :to="tab.to"
        :key="tab.title"
        exact=""
        >{{ tab.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
import logo from "../assets/imgs/logo-agmatix.png";
export default {
  data() {
    return {
      logoSrc: logo,
      tabLinks: [
        { title: "Home", to: "/" },
        { title: "Customers", to: "/customers" },
      ],
    };
  },
};
</script>
