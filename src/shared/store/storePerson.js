export default {
    mutations: {
        storeUpdatePersonAllList(state, arr){
            state.personAllList = arr
        },
        storeUpdatePersonList(state, arr){
            state.personList = arr
        },
        storeUpdateSelectPerson(state, obj){
            state.selectPerson = obj
        },
    },
    state: {
        selectPerson: null,
        personAllList: null,
        personList: null,
    },
    getters: {
        storeGetPersonList(state){
            return state.personList
        },
        storeGetSelectPerson(state){
            return state.selectPerson
        },
        storeGetPersonAllList(state){
            return state.personAllList
        }
    }
}