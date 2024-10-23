import Icon from "./components/Icon";
import Box from "./components/Box";
import Text from "./components/Text";
import Scaffold from "./components/Scaffold";
import Button from "./components/Button";
import Image from "./components/Image";
import Row from "./components/Row";
import Column from "./components/Column";
import TouchableOpacity from "./components/TouchableOpacity";
import CheckUserConnected from "./components/CheckUserConnected";
import Input from "./components/Input";
import EmptyList from "./components/EmptyList";
import HeaderNavigation from "./components/HeaderNavigation";
import Switch from "./components/Switch";
import RenderRandomImageDynamic from "./components/RenderRandomImageDynamic";
import ItemSeparator from "./components/ItemSeparator";
import InputWithIcon from "./components/InputWithIcon";
import Loader from "./components/Loader";

export {
  Icon,
  Box,
  Text,
  Scaffold,
  Button,
  Image,
  Row,
  Column,
  TouchableOpacity,
  CheckUserConnected,
  Input,
  EmptyList,
  HeaderNavigation,
  Switch,
  RenderRandomImageDynamic,
  ItemSeparator,
  InputWithIcon,
  Loader,
};

export {
  setUserShowOnboardingScreen,
  functionnalitySelectors,
  setMenuChoiced,
  resetMenuChoiced,
  functionnalitySlice,
} from "./slice/functionnalitySlice";

export {
  setModuleData,
  removeModuleData,
  moduleSlice,
  moduleSelectors,
} from "./slice/moduleSlice";

export {
  ModuleApi,
  useGetAllModulesQuery,
  useGetContentOfModuleQuery,
} from "./api/moduleApi";

export { ModuleT, SectionT, ItemT, MenuI, OptionI } from "./types/types";

export { STYLES } from "./styles";
