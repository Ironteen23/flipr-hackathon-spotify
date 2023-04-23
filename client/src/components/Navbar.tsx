import { useState } from "react"
import {
  createStyles,
  Group,
  UnstyledButton,
  Text,
  Menu,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  Avatar,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core"

import { useDisclosure } from "@mantine/hooks"
import {
  IconLogout,
  IconSkull,
  IconChevronDown,
  IconUser,
  IconSun,
  IconBell,
  IconMoonStars,
  IconAlertTriangle,
} from "@tabler/icons-react"

const useStyles = createStyles(theme => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    padding: theme.spacing.md,
    boxShadow: "0 0 12px rgba(0,0,0,0.2)",
    clipPath: "inset(0px 0px -200ppx 0px)",
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}))


export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const { classes, theme, cx } = useStyles()
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Box className={classes.navbar}>
      <Group position="left">
        <Text>New Releases</Text>
        <Text>Shuffle play</Text>
        <Text>Live podcasts</Text>
      </Group>

      <Group position="right">

        {/* Theme toggle */}
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>

        {/* Notification Panel */}
        <Menu
          width={360}
          position="bottom-start"
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
        >
          <Menu.Target>
            <ActionIcon variant="outline" color="blue" title="Report a bug">
              <IconBell size={18} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Notifications</Menu.Label>
            <Menu.Item icon={<IconAlertTriangle size={14} stroke={1.5} />}>
                Mkbhd Waveform: The M1 Macs are Amazing!
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        {/* User profile menu */}
        <Menu
          width={260}
          position="bottom-end"
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, {
                [classes.userActive]: userMenuOpened,
              })}
            >
              <Group spacing={7}>
                <Avatar
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                  radius="xl"
                  size={20}
                />
                <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                  Raphaël Varane
                </Text>
                <IconChevronDown size={12} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<IconUser size={14} stroke={1.5} />}>
              My Profile
            </Menu.Item>

            <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
              Logout
            </Menu.Item>

            <Menu.Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item color="red" icon={<IconSkull size={14} stroke={1.5} />}>
              Delete account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        {/* Only mobile visible hamburger menu button */}
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
        />
      </Group>

      {/* Hamburger menu contents, only visible on mobile devices aka desktop hidden */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={2}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
