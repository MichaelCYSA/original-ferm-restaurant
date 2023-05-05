import { Box, Typography } from "@mui/material";
import Image from "next/image";

const AdminMainPage = ({ token }: { token: string }) => {

  return (
      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Typography
          maxWidth={400}
          textAlign={"center"}
          variant="h3"
          fontSize={32}
        >
          Welcome to Ferma cu Origin Restaurant Admin CRM !
        </Typography>
        <Image
          style={{ margin: "40px auto" }}
          src={"/logo.png"}
          width={240}
          height={60}
          alt="logo"
        />
      </Box>
  );
};

export default AdminMainPage;
