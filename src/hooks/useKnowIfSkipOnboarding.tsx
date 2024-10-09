import { setUserShowOnboardingScreen } from "_shared";
import { getDataToMMKV } from "_storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useKnowIfSkipOnboarding = () => {
  const dispatch = useDispatch();

  const isMMkVContainValueForSkipOnboarding = getDataToMMKV(
    "functionnality.isUserAlreadyShowOnboardingScreen",
    "boolean",
  );

  useEffect(() => {
    if (isMMkVContainValueForSkipOnboarding) {
      dispatch(setUserShowOnboardingScreen(true));
    }
  }, [isMMkVContainValueForSkipOnboarding, dispatch]);

  return {
    isMMkVContainValueForSkipOnboarding,
  };
};
