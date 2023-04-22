import { useState } from "react";
import {
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsFillFastForwardFill,
} from "react-icons/bs";

import {
  createStyles,
  rem,
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
    height: "300px",
    backgroundColor: "#1f2120",
    borderRadius: "40px",
    boxShadow: "1px 1px 5px black",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    margin: "10px",

    flexDirection: "column",
  },

  profile: {
    borderRadius: "100%",
    width: "150px",
    height: "150px",
    backgroundColor: "white",
    marginTop: "14px",
    alignSelf: "center",
  },

  controlsDiv: {
    // backgroundColor: "orange",
    height: "25%",
    width: "340px",
    borderBottomLeftRadius: "40px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomRightRadius: "40px",
  },

  infoDiv: {
    // backgroundColor: "red",
    height: "75%",
    width: "340px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
  },
}));

const audioplayer = () => {
  const { classes, cx } = useStyles();

  // const [end, setEnd] = useState(20);
  // const [start, setStart] = useState(0);
  const [pause, setPause] = useState(false);

  const togglePause = () => {
    setPause(!pause);
  };

  return (
    <>
      <div className={classes.outerDiv}>
        <div className={classes.infoDiv}>
          <div className={classes.profile}>{/* image here */}</div>
          <p style={{ textAlign: "center" }}>
            The Beer Biceps Podcast
            <br/>
            WireFrame
          </p>

          {/* <Slider
            defaultValue={0}
            min={-10}
            max={10}
            label={(value) => value.toFixed(1)}
            step={0.1}
            styles={{ markLabel: { display: "none" } }}
          /> */}
        </div>
        <div className={classes.controlsDiv}>
          <BsFillRewindFill fontSize="2rem" />
          {pause ? (
            <BsFillPauseFill
              fontSize="2rem"
              // color="blue"
              onClick={() => togglePause()}
            />
          ) : (
            <BsFillPlayFill fontSize="2rem" onClick={() => togglePause()} />
          )}

          <BsFillFastForwardFill fontSize="2rem" />
        </div>
      </div>
    </>
  );
};

export default audioplayer;
