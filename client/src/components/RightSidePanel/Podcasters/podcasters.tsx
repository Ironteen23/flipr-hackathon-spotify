import { useState } from "react";
import {
  createStyles,
  rem,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: rem(60),
    paddingTop: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },

  outerDiv: {
    width: "340px",
    height: "60px",
    backgroundColor: "#1f2120",
    borderRadius: "20px",
    boxShadow: "1px 1px 5px black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "8px",
    // flexDirection: "row",
  },

  profile: {
    borderRadius: "100%",
    width: "55px",
    height: "55px",
    backgroundColor: "white",
    marginLeft: "10px",
  },
}));

const podcasters = () => {
  const { classes, cx } = useStyles();
  const [follow, setFollow] = useState(false);

  const toggleButton = () => {
    setFollow(!follow);
    console.log(follow);
  };

  return (
    <>
      <div className={classes.outerDiv}>
        <div className={classes.profile}/>
        <div style={{ fontSize: "1rem" }}>Hem Mahimkar</div>
        {follow ? (
          <Button
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            radius="xl"
            size="sm"
            onClick={() => toggleButton()}
          >
            {/* {follow ? <>Following</> : <>Follow</>} */}
            Following
          </Button>
        ) : (
          <Button
            variant="light"
            color="orange"
            // gradient={{ from: "orange", to: "red" }}
            radius="xl"
            size="sm"
            onClick={() => toggleButton()}
          >
            {/* {follow ? <>Following</> : <>Follow</>} */}
            Follow
          </Button>
        )}
      </div>
    </>
  );
};

export default podcasters;
