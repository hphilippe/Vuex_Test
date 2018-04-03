<template>
  <div class="album">
    <ul>
      <li v-for="detailAlbum in detailAlbumList" :key="detailAlbum.id">
        <img :src="detailAlbum.thumbnailUrl" :alt="detailAlbum.title" @click="showPicture(detailAlbum)">
      </li><br/>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'album-details',
  methods: {
    ...mapActions([
      'showPicture',
    ]),
  },
  computed: {
    ...mapState({
      detailAlbumList: state => state.albums.detailAlbumList,
    }),
  }
}
</script>

<style scoped>
.album ul{
  list-style-type: none;
}
.album ul li {
  float: left;
  margin: 5px;
  cursor: pointer;
}
</style>
