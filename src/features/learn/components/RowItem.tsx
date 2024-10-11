import { Box, Icon, Row, Text } from "_shared";
import IconPlayerDone from "_images/svg/icon-player-done.svg";
import IconPlayer from "_images/svg/icon-player.svg";
import IconDone from "_images/svg/icon-done.svg";
import IconLock from "_images/svg/icon-lock.svg";

import { RFValue } from "_utils";
import { useGetTheme } from "_theme";

type RowItemProps = {
  alreadyListen: boolean;
  title: string;
  duration: string;
  alreadyRead: boolean;
};

export const RowItemm = ({ item }: { item: RowItemProps }) => {
  const { colors, sizes } = useGetTheme();

  return (
    <Row
      alignItems={"center"}
      justifyContent={"space-between"}
      my={"xs"}
      width={"100%"}
    >
      {item.alreadyListen ? (
        <IconPlayerDone height={RFValue(30)} width={RFValue(30)} />
      ) : (
        <IconPlayer height={RFValue(30)} width={RFValue(30)} />
      )}
      <Box flex={1} ml={"xs"}>
        <Text variant={"secondaryBold"}>{item.title}</Text>
        <Text variant={"tertiary"} color={"grey"}>
          {item.duration}
        </Text>
      </Box>

      {item.alreadyRead ? (
        <IconDone height={RFValue(24)} width={RFValue(24)} />
      ) : (
        <IconLock height={RFValue(24)} width={RFValue(24)} />
      )}
    </Row>
  );
};
