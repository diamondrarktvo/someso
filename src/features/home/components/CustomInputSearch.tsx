import { Row } from "_shared";
import { RFValue } from "_utils";
import { TextInput } from "react-native";
import IconSearch from "_images/svg/icon-search.svg";
import IconFilter from "_images/svg/icon-filter.svg";
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
      <IconSearch height={RFValue(20)} width={RFValue(20)} />
      <TextInput placeholder="Search" style={homeStyles.inputSearch} />
      <IconFilter height={RFValue(20)} width={RFValue(20)} />
    </Row>
  );
};

export default SearchInput;
