import { createStyles, Text, rem } from "@mantine/core"

const useStyles = createStyles(theme => ({
  root: {
    display: "flex",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(24),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  count: {
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: 700,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}))

interface StatsProps {
  title: string
  size: number
  file_type: string
}

export function StatsGroup({ title, size, file_type }: StatsProps) {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <div key={title} className={classes.stat}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.count}>
          {size > 1024 ** 2
            ? `${(size / 1024 ** 2).toFixed(2)} MB`
            : `${(size / 1024).toFixed(2)} KB`}
        </Text>
        <Text className={classes.description}>{file_type}</Text>
      </div>
    </div>
  )
}
