import {createStore} from "vuex"
import storePerson from '@/shared/store/storePerson'
export const store = createStore({
    modules:{
        storePerson
    }
})