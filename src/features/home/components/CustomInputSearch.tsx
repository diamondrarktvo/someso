import { Icon, Row } from "_shared";
import { RFValue, widthPercentageToDP } from "_utils";
import { TextInput } from "react-native";
import IconSearchSVG from "_images/svg/icon-search.svg";
import IconFilterSVG from "_images/svg/icon-filter.svg";
import { homeStyles } from "./styles";

const SearchInput = () => {
  return (
    <Row
      backgroundColor={"white"}
      borderRadius={"md"}
      py={"s"}
      px={"m"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <IconSearchSVG height={RFValue(20)} width={RFValue(20)} />
      <TextInput placeholder="Search" style={homeStyles.inputSearch} />
      <IconFilterSVG height={RFValue(20)} width={RFValue(20)} />
    </Row>
  );
};

export default SearchInput;
