<template lang="html">
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input
          type="date"
          class="form-control"
          v-model="timeEntry.date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input
          type="number"
          class="form-control"
          v-model="timeEntry.totalTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input
          type="text"
          class="form-control"
          v-model="timeEntry.comment"
          placeholder="Comment"
        />
      </div>
    </div>    
    <button class="btn btn-primary" @click="">Save</button>
    <router-link to="/time-entries" tag="button" class="btn btn danger">Cancel</router-link>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      timeEntry: {
        user: {
          firstName: 'Andrew',
          lastName: 'Garfield',
          email: 'jam@gmail.com',
          image: 'http://placehold.it/75x75'
        }
      }
    }
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
