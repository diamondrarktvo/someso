import { useNavigation } from "@react-navigation/native";
import { setUserShowOnboardingScreen } from "_shared";
import { useAppDispatch } from "_store";
import { useCallback, useState } from "react";

export const useStartApp = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const startApp = useCallback(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      dispatch(setUserShowOnboardingScreen(true));
      navigation.navigate("main_menu_screen");
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return {
    startApp,
    loading,
  };
};
