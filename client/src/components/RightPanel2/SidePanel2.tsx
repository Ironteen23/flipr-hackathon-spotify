import { useState } from 'react'
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
  Image,
  Text,
} from '@mantine/core'
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantine/ds'

const useStyles = createStyles((theme) => ({
  navbar: {
    // backgroundColor: theme.fn.variant({
    //   variant: 'filled',
    //   color: theme.primaryColor,
    // }).background,
    backgroundColor: '#17213C',
    borderRadius: '10px',
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background!,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background!,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.15
      ),
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },
}))

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
]

export default function NavbarSimpleColored() {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Billing')

  const links = data.map((item) => (
    <>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        href={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault()
          setActive(item.label)
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    </>
  ))

  return (
    <Navbar
      height={'100vh'}
      width={{ sm: 300 }}
      p='md'
      className={classes.navbar}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position='apart'>
          <Image
            width={200}
            maw={240}
            mx='auto'
            radius='md'
            src='../../../assets/logo.png'
            alt='Random image'
          />
          <Code className={classes.version}>v3.1.2</Code>
        </Group>
        <Text color='#DFE4F1' fw={500}>
          MENU
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Discover
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Trending
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Genre
        </Text>
        <Text color='#DFE4F1' fw={500}>
          LIBRARY
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Recent
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Playlists
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Favourites
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Local
        </Text>
        <Text color='#DFE4F1' fw={500}>
          CUSTOIMZE
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          New Playlist
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Account
        </Text>
        <Text color='#DFE4F1' fz='sm'>
          Settings
        </Text>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href='#'
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href='#'
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}
