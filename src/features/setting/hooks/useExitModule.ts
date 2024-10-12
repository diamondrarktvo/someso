import { CommonActions, useNavigation } from "@react-navigation/native";
import { resetMenuChoiced } from "_shared";
import { useAppDispatch } from "_store";
import { useCallback, useState } from "react";

export const useExitModule = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const exitCurrentModule = useCallback(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      dispatch(resetMenuChoiced());
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "main_menu_screen" }],
        }),
      );
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return {
    exitCurrentModule,
    loading,
  };
};
