import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainNewsContainer: {
    backgroundColor: "#0a2232",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  mainScreenNews: {
    width: "100%",
    backgroundColor: "#0a2232",
    paddingRight: 20,
    paddingLeft: 20,
    // height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    justifyItems: "center",
    paddingTop: 20,
  },

  textStyle: {
    color: "white",
    fontSize: 20,
  },

  dropdown: {
    color: "white",
    backgroundColor: "#0a2232",
    height: 30,
    borderRadius: 15,
    width: "15%",
  },
});
