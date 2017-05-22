<template lang="html">
  <div class="panel panel-default">
      <div class="panel-heading">
          <h1 class="text-center">Total Time</h1>
      </div>
      <div class="panel-body">
          <div class="">

          </div>
          <h1 class="text-center"> {{ total }} hours</h1>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      entries: 'allEntries'
    }),
    total () {
      return this.entries.reduce((total, entry) => {
        return total + parseFloat(entry.totalTime)
      }, 0)
    }
  }
}
</script>

<style lang="css">
</style>
