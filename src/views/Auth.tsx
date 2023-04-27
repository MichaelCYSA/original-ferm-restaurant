import { useAuth } from '@/hooks/useAuth';
import { ILoginData, ILoginResponse, useLoginMutation } from '@/store/api/auth';
import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEventHandler, useState } from 'react';
import { useEffect } from 'react';

const Auth = () => {
  const [data, setData] = useState<ILoginData>({
    password: "",
    email: "",
  });

  const handleInputChange =
    (
      name: string
    ): ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =>
      (e) =>
        setData((prev) => ({ ...prev, [name]: e.target.value }));

  const [login] = useLoginMutation()
  const { token, setAccess } = useAuth()
  const router = useRouter()

  const handleLogin = () => login({ data }).then(({ data }: { data: ILoginResponse }) => setAccess(data.token))


  useEffect(() => {
    if (token) {
      router.push('/admin')
    }
  }, [])

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
        <Button onClick={handleLogin} variant="contained">Login</Button>
      </Box>
    </Box>
  );
};

export default Auth;
