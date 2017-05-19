<template lang="html">
  <div class="">
    <router-link to="">Log Time</router-link>
    <div class=""  v-if="$route.path === '/time-entries/logtime'">
      <h3>Log Time</h3>
    </div>
    <hr>
    <router-view></router-view>
    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>
      <div class="list-group">
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" alt="" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>
                  {{ timeEntry.user.firstName }}
                  {{ timeEntry.user.lastName }}
                </strong>
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-text totalTime">
                <i class="glyphicon glyphicon-time"></i>
                {{  }}
              </h3>
              <p>

              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    timeEntries: 'allEntries'
  })
}
</script>

<style lang="css">
</style>
