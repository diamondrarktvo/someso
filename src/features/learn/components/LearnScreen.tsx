import { Box, HeaderNavigation, Scaffold, Text } from "_shared";
import { heightPercentageToDP } from "_utils";

const LearnScreen = () => {
  return (
    <Scaffold typeOfScreen="stack">
      <Box>
        <HeaderNavigation title="Community" />
      </Box>
    </Scaffold>
  );
};

export default LearnScreen;
