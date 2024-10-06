import { Scaffold, Row, Text } from "_shared";

const HomeScreen = () => {
   return (
     <Scaffold typeOfScreen="tab">
       <Row>
         <Text variant={"primary"}>Home</Text>
       </Row>
     </Scaffold>
   );
};

export default HomeScreen;
