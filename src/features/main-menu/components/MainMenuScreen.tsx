import { Scaffold, Row, Text, STYLES } from "_shared";
import { palette } from "_theme";
import { LinearGradient } from "expo-linear-gradient";

const MainMenuScreen = () => {
  return (
    <LinearGradient
      style={STYLES.container}
      colors={palette.linearColor}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Scaffold typeOfScreen="stack" backgroundColor={"transparent"}>
        <Text>teste</Text>
      </Scaffold>
    </LinearGradient>
  );
};

export default MainMenuScreen;
