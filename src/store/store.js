import {legacy_createStore as createStore} from "redux"
import reducer from "../store/reducers/reducers"

export const myStore = createStore(reducer)