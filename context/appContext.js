const { default: axios } = require("axios");
const { useReducer } = require("react");

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //    axios
  const authFetch = axios.create({
    baseURL: "http://doctor.brandimagetech.com/",
  });

  //  request
};
