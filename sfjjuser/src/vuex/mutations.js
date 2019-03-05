export default {
 
  changetitle: function (state, n) {
    state.documentTitle = n;
  },
  changeBack: function (state, n) {
    state.headBack = n;
  },
  changeTab: function (state, n) {
    state.tab = n;
  },
  changeTabwidth: function (state, n) {
    state.tabWidth = n;
  },
 	addUserId: function (state, n) {
    state.userId = n;
  },
  addToken: function (state, n) {
    state.token = n;
  },

}
