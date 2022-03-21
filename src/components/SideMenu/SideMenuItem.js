import { Typography } from "@mui/material";

const items = [
  "Profile",
  "What's new",
  "Help",
  "Send feedback",
  "Hints and shortcuts",
  "Log out",
];

const SideMenuItem = () => {
  return (
    <>
      {items.map((item) => {
        return (
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography fontSize={15} sx={{ mx: 1, mb: 1 }}>
              {item}
            </Typography>
          </a>
        );
      })}
    </>
  );
};

export default SideMenuItem;
