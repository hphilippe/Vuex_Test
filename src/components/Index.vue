<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="albumList">
      <h2>Liste des albums</h2><br/>
      <ul>
        <li v-for="album in albumList" :key="album.id">
          {{album.title}} <span class="detailsLink" @click="showAlbum(album.id)">Détails</span>
        </li><br/>
      </ul>
    </div>
    <div id="albumDetails">
      <div id="photoDetails">
        <img :src="showPicture.url" :alt="showPicture.title">
      </div>
      <album-details></album-details>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';
import AlbumDetails from './AlbumDetails';

export default {
  name: 'index',
  components: {
    AlbumDetails,
  },
  data () {
    return {
      msg: 'Test technique Infolegale',
    }
  },
  created () {
    this.fetchAlbumList();
  },
  methods: {
    ...mapActions([
      'fetchAlbumList',
      'showAlbum'
    ]),
  },
  computed: {
    ...mapState({
      albumListLoading: state => state.profil.albumListLoading,
      albumList: state => state.albums.albumList,
      showPicture: state => state.albums.showPicture
    }),
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
li {
  list-style: none;
}
a {
  color: #42b983;
}
.detailsLink {
  color: blue;
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;
}
#albumList {
  width: 49%;
  float: left;
  display: inline-block;
  border-right: 2px solid #BABABA;
}
#albumDetails {
  width: 49%;
  float: left;
  display: inline-block;
}
</style>
