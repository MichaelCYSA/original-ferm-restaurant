import { Box, TextField, Button } from "@mui/material";
import { useState, ChangeEventHandler } from "react";
import { useGetProductsQuery } from "@/store/api/product";

const Auth = () => {
  const [data, setData] = useState({
    password: "",
    email: "",
  });

  const handleInputChange =
    (
      name: string
    ): ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =>
    (e) =>
      setData((prev) => ({ ...prev, [name]: e.target.value }));
      
  const { data: p, error } = useGetProductsQuery({})

  console.log({p, error})
  return (
    <Box
      minWidth={"375px"}
      width={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={'100vh'}
      p={3}
    >
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <TextField
          onChange={handleInputChange("email")}
          value={data.email}
          variant="outlined"
          label={"Email"}
          type={"email"}
          fullWidth
        />
        <TextField
          onChange={handleInputChange("password")}
          value={data.password}
          variant="outlined"
          label={"Password"}
          type={"password"}
          fullWidth
        />
        <Button variant="contained">Login</Button>
      </Box>
    </Box>
  );
};

export default Auth;
