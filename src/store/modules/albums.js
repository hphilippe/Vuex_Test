import * as types from '@/store/mutation-types';
import {
  fetchAlbumList as fetchAlbumListApi,
  fetchAlbumDetailList as fetchAlbumDetailListApi
} from '@/services/albums';

// =================================
// Initial state
// =================================
const state = {
  albumList: [],
  albumListLoading: false,
  detailAlbumList:[],
  showPicture: []
};

// =================================
// Mutations
// =================================
const mutations = {
  [types.ALBUM_LIST_REQUEST](state) {
    state.albumListLoading = true;
  },
  [types.ALBUM_LIST_SUCCESS](state, albumList) {
    state.albumList = albumList;
    state.albumListLoading = false;
  },
  [types.DETAIL_ALBUM_LIST_REQUEST](state, detailAlbumList){
    state.detailAlbumList = detailAlbumList;
  },
  showPicture: (state, payload) => {
    state.showPicture = payload;
  }
};

// =================================
// Actions
// =================================
const actions = {
  fetchAlbumList({ commit }) {
    commit(types.ALBUM_LIST_REQUEST);
    return fetchAlbumListApi().then(
      albumList => commit(types.ALBUM_LIST_SUCCESS, albumList),
    );
  },
  showAlbum({commit}, id) {
    return fetchAlbumDetailListApi(id).then(
      detailAlbumList => commit(types.DETAIL_ALBUM_LIST_REQUEST, detailAlbumList),
    );
  },
  showPicture(context, payload){
	scrollTo(0, 200);
    context.commit('showPicture', payload);
  }
};

export default {
  state,
  mutations,
  actions,
};
