import { StyleSheet } from "react-native";
import { baseColor } from "../../theme/index";

export default StyleSheet.create({
  logincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: baseColor.white,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    paddingTop: 10,
  },
  textError:{
      fontSize:10,
      color:baseColor.danger
  }
});
