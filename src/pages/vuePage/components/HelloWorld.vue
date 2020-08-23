<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="countAdd">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countAdd() {
      this.count++;
    },
  },
};
</script>
