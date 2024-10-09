import { StackParamList } from "./Types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
