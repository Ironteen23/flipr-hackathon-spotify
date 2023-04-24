import { useDisclosure } from "@mantine/hooks"
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Center,
  Title,
  Text,
  Anchor,
  Dialog,
} from "@mantine/core"
import { IconBrandGoogle } from "@tabler/icons-react"

const useStyles = createStyles(theme => ({
  wrapper: {
    backgroundSize: "cover",
    backgroundImage: "url(./hero.jpg)",
  },

  form: {
    background: "#17213c",

    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    fontWeight: 800,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

export default function LoginPage({ handleLogin }) {
  const { classes } = useStyles()
  const [opened, { toggle, close }] = useDisclosure(false)

  const handleCredentialsLogin = () => {
    toggle()
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Center>
          <img src="./logo.png" alt="brand" height="80rem" />
        </Center>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome to Earow
        </Title>

        <TextInput
          label="Email address"
          placeholder="kevin@gmail.com"
          size="md"
        />

        <TextInput
          label="Username"
          placeholder="Kevin De Bruyne"
          mt="md"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />

        <Dialog
          opened={opened}
          withCloseButton
          onClose={close}
          radius="md"
          sx={{ background: "#fff5f5" }}
        >
          <Text c="red" fw={600}>
            Invalid Credentials!
          </Text>
          <Text fz="sm">Hmm… that email doesn't look valid</Text>
        </Dialog>

        <Button fullWidth mt="xl" size="md" onClick={handleCredentialsLogin}>
          Login
        </Button>

        <Button
          fullWidth
          mt="xl"
          size="md"
          color="dark"
          onClick={() => handleLogin("redirect")}
          leftIcon={<IconBrandGoogle size={18} />}
        >
          Login with Google
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={event => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}
