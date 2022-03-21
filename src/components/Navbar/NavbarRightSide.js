import Stack from "@mui/material/Stack";

import InviteButton from "./InviteButton";
import BellIcon from "./BellIcon";
import ProfileAvatar from "./ProfileAvatar";

const NavbarRightSide = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        ml: "auto",
        alignItems: "center",
      }}
    >
      <InviteButton />
      <BellIcon />
      <ProfileAvatar />
    </Stack>
  );
};

export default NavbarRightSide;
