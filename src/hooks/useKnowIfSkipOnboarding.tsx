import { setUserShowOnboardingScreen } from "_shared";
import { getDataToMMKV } from "_storage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useKnowIfSkipOnboarding = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataToMMKV("functionnality.isUserAlreadyShowOnboardingScreen", "boolean")
      .then((value) => {
        if (value && typeof value === "boolean") {
          dispatch(setUserShowOnboardingScreen(value));
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log("error getting data from MMKV : ", e);
        setLoading(false);
      });
  }, [dispatch]);

  return { loading };
};
