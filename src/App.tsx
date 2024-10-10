import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "_store";
import { LogBox } from "react-native";
import Main from "./Main";

export default function App() {
  // FIXME: Remove this when the issue is fixed
  LogBox.ignoreLogs([
    "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.",
    "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.",
  ]);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
