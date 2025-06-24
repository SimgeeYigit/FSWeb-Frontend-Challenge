import { CHANGE_LANGUAGE, CHANGE_MODE } from "../actions/actions";
import data from "../../data.json";

const initialState = {
  language: "en",
  mode: "light",
  content: data.en,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE: {
      const newMode = state.mode === "light" ? "dark" : "light";
      return {
        ...state,
        mode: newMode,
      };
    }
    case CHANGE_LANGUAGE: {
      const newLanguage = state.language === "en" ? "tr" : "en";
      return {
        ...state,
        language: newLanguage,
        content: data[newLanguage],
      };
    }
    default:
      return state;
  }
}

export default reducer;

