<template lang="html">

</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {

  },
  methods: {
    addTimeEntry: function (data) {
      this.$store.commit('addTimeEntry', data)
    }
  }
}
</script>

<style lang="css">
</style>
