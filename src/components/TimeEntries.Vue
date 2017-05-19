<template lang="html">
  <div class="">
    <router-link to="">Log Time</router-link>
    <div class=""  v-if="$route.path === '/time-entries/logtime'">
      <h3>Log Time</h3>
    </div>
    <hr>
    <router-view></router-view>
    <div class="time-entries">
      <p><strong>No time entries yet</strong></p>
      <div class="list-group">
        <a class="list-group-item">

        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
