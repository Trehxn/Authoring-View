import { Box } from "@mui/system";

import SideMenuItem from "./SideMenuItem";
import DarkModeButton from "./DarkModeButton";

const SideMenu = () => {
  return (
    <Box sx={{ backgroundColor: "white", width: "18%", minWidth: "10rem" }}>
      <DarkModeButton />
      <SideMenuItem />
    </Box>
  );
};

export default SideMenu;
