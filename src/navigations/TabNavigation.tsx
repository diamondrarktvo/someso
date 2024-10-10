//IMPORT FROM NODE_MODULES
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//LOCAL IMPORT
import { TabParamList } from "./Types";
import { Icon, Text } from "_shared";
import { useTheme } from "@shopify/restyle";
import { Theme } from "_theme";
import { HomeScreen, ProfileScreen } from "_features";

const Tab = createBottomTabNavigator<TabParamList>();

//types
interface TabRouteTypes {
  name: keyof TabParamList;
  component: React.FC<unknown>;
  tabLabel: string;
  icon: string;
}

//routes
const TABROUTES: TabRouteTypes[] = [
  {
    name: "home_screen",
    component: HomeScreen,
    tabLabel: "Accueil",
    icon: "home",
  },
  {
    name: "profile_screen",
    component: ProfileScreen,
    tabLabel: "Profile",
    icon: "person-outline",
  },
];

const TabNavigation = () => {
  const theme = useTheme<Theme>();
  const { primary, mainForeground, mainBackground } = theme.colors;
  return (
    <Tab.Navigator
      initialRouteName="home_screen"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarStyle: [{ backgroundColor: mainBackground }],
      }}
    >
      {TABROUTES.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            title: route.tabLabel,
            tabBarActiveTintColor: primary,
            tabBarInactiveTintColor: mainForeground,
            tabBarLabel: ({ focused }) => (
              <Text
                variant={"tertiaryBold"}
                color={focused ? "primary" : "black"}
              >
                {route.tabLabel}
              </Text>
            ),
            tabBarIcon: ({ focused, color }) => (
              <Icon name={route.icon} color={color} size={focused ? 32 : 22} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
