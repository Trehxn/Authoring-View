import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const InviteButton = () => {
  return (
    <Button color="inherit">
      <PersonAddIcon sx={{ mr: 1 }} />
      <Typography fontSize={12}>INVITE TEAM MEMBER</Typography>
    </Button>
  );
};

export default InviteButton;
