<template>
  <div ref="someRef" class="home">
    <md-button class="md-raised" @click="toggleFade">Toggle fade</md-button>
    <transition name="fade">
      <p v-if="!isFade">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magni,
        dolorum doloremque animi unde voluptas aliquam, facilis tempore quo,
        quam temporibus harum. Distinctio accusantium eius doloremque reiciendis
        explicabo iste perferendis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Nemo magni, dolorum doloremque animi unde voluptas
        aliquam, facilis tempore quo, quam temporibus harum. Distinctio
        accusantium eius doloremque reiciendis explicabo iste perferendis.
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    isFade() {
      return this.$store.getters.isFade;
    },
  },
  mounted() {
    this.traverse(this.$refs.someRef, this.visit);
  },
  methods: {
    toggleFade() {
      this.$store.commit("toggleIsFade");
    },
    visit(item) {
      console.log("visit", item);
    },
    traverse(element, callback) {
      callback(element);
      var childrenList = [...element.children];

      childrenList.forEach((item) => {
        this.traverse(item, callback);
      });
    },
  },
};
</script>
