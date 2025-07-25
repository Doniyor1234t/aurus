import { Avatar, AvatarGroup, Box, Card, CardContent, Typography } from "@mui/material";
import CheckIcon from "../../../../../assets/icons/CheckIcon";
type Reason = {
  title: string;
  description: string;
};

type ReasonCardProps = {
  reason: Reason;
  index: number;
};
const ReasonCard = ({ reason, index }: ReasonCardProps) => {
  return (
    <Card sx={{ 
        mb: 2,
        mt: { xs: 0, md: '-80px' },
        backgroundColor: "#F8F8F8",
        borderRadius: { xs: "16px", md: "20px" },
        boxShadow: "none",
        maxWidth: "520px",
        width: "100%",
        height: { xs: "148px", md: "240px" },
        display: "flex",
        alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
        flexDirection: "column",
        m: 0
      }}>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        padding: { xs: 2, md: 3 },
        "&:last-child": {
          pb: { xs: 2, md: 3 },
        }
      }}>
        <Box sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography variant="body1" sx={{
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "20px",
            m: 0, // remove margin
            p: 0,
          }}>{reason.title}</Typography>
          <Box>
            <AvatarGroup>
              <Avatar sx={{ bgcolor: "#fff" }}>
                <CheckIcon />
              </Avatar>
              <Avatar sx={{ 
                opacity: 0.5, 
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: 700,
                color: "#363636",
                backgroundColor: "#fff",
              }}>
                0{index + 1}
              </Avatar>
            </AvatarGroup>
          </Box>
        </Box>
        <Typography variant="body2" sx={{maxWidth: "292px", fontSize: { xs: "14px", md: "16px" }}}>{reason.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReasonCard;
