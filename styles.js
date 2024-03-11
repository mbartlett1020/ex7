import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  taskListContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#484848",
    overflow: "hidden",
    width: "50%",
    marginVertical: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ACACAC",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  addButton: {
    backgroundColor: "#000000",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
