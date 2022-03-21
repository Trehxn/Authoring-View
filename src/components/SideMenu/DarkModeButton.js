import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

const DarkModeButton = () => {
  return (
    <Typography sx={{ mx: 1, mb: 1 }} fontSize={15}>
      Dark mode <Switch size="small" sx={{ ml: 3 }} />
    </Typography>
  );
};

export default DarkModeButton;
