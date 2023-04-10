import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Modal, Group, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { TextInput, PasswordInput, Box } from "@mantine/core";

function Login({ onClose }) {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(true, {
    onOpen: () => {
      console.log("Opened");
    },
    onClose: () => {
      console.log("Closed");
    },
  });

  const schema = z.object({
    password: z
      .string()
      .min(2, { message: "Password should have at least 2 letters" }),
    email: z.string().email({ message: "Invalid email" }),
  });

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      password: "",
      email: "",
    },
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logInHandler() {
    console.log("clicked");

    setIsLoggedIn(false);
    console.log(isLoggedIn);
  }
  return (
    <>
      <Modal
        isLoigin={isLoggedIn}
        opened={opened}
        onClose={onClose}
        centered
        c="#8ce99a"
        my="0"
        py="0"
      >
        <div c="blue.6" ta="center">
          <h2
            style={{
              color: "red",
              padding: 0,
              margin: 0,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            LOG IN
          </h2>{" "}
        </div>

        <Box size={32} maw={340} mx="auto" position="absolute" left="90">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              data-autpfocus
              variant="filled"
              withAsterisk
              label="Email"
              placeholder="example@mail.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              variant="filled"
              label="Password"
              placeholder="pass123"
              mt="sm"
              {...form.getInputProps("password")}
            />

            <Group position="right" mt="xl">
              <Button
                variant="outline"
                onClick={logInHandler}
                color="Green"
                type="Login"
                size="md"
              >
                Log in
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>

      {/* use navigate -1 */}
    </>
  );
}

// ----------------------------------

export default Login;
