import { cityList, costList } from '../../api/index'

const state = {
  cityList: [],
  costList: [],
  addressList: {},
  address: [],
  city: [],
  cost: []
}
const mutations = {
  updateState(state, action) {
    state = Object.assign(state, action);
  }
}
const actions = {
  // 获取签发城市列表
  async getCityList({ commit }) {
    let res = await cityList();
    res.data.forEach(item => {
      item.list.forEach(value => {
        delete value.list;
      })
    })
    commit('updateState', { cityList: res.data })
    // console.log('res...', res.data);
  },
  async getAddressList({ commit }) {
    let res = await cityList();
    let formatAddress = {
      province_list: {},
      city_list: {},
      county_list: {}
    }
    res.data.forEach(item => {
      formatAddress.province_list[item.id] = item.name;
      item.list.forEach(itm => {
        formatAddress.city_list[itm.id] = itm.name;
        itm.list.forEach(val => {
          formatAddress.county_list[val.id] = val.name
        })
      })
    })
    commit('updateState', { addressList: formatAddress })
    // console.log('res...', res.data);
  },
  async getCostList({ commit, state }, action) {
    let proIndex = state.cityList.findIndex(item => item.name == state.city[0]);
    let cityIndex = state.cityList[proIndex].list.findIndex(item => item.name == state.city[1])
    let res = await costList(1, state.cityList[proIndex].id, state.cityList[proIndex].list[cityIndex].id)
    //console.log(state.cityList[proIndex],state.cityList[proIndex].list[cityIndex],'resst')
    commit('updateState', { costList: res.data })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}