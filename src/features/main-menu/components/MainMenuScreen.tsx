import { Scaffold, Row, Text } from "_shared";

const MainMenuScreen = () => {
   return (
     <Scaffold typeOfScreen="stack">
       <Row>
         <Text variant={"primary"}>Main Menu</Text>
       </Row>
     </Scaffold>
   );
};

export default MainMenuScreen;
