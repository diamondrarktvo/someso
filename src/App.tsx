import { Provider } from "react-redux";
import { store } from "_store";
import { LogBox } from "react-native";
import Main from "./Main";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  // FIXME: Remove this when the issue is fixed
  LogBox.ignoreLogs([
    "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.",
    "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.",
  ]);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
