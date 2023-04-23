import { useState } from "react";
import Podcasters from "./Podcasters/podcasters";
import Audioplayer from "./AudioPlayer/audioplayer";

import { createStyles, TextInput, rem } from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";

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
    width: "320px",
    // height: "100vh",
    // backgroundColor: "#4f5451",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  panel: {
    width: "320px",
    height: "160vh",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    display: "flex",
    flexDirection: "column",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    // justifyContent: "center",
    alignItems: "center",
  },

  searchBarCont: {},
}));

const RightSidePanel = (props) => {
  const { classes, cx } = useStyles();
  const [searchkey, setSearchKey] = useState("");
  return (
    <>
      <div className={classes.panel}>
        <div className={classes.outerDiv}>
          <div className={classes.searchBarCont}>
            <h3>Quick Search</h3>
            <TextInput
              placeholder="Search"
              size="sm"
              radius="xl"
              icon={<IconSearch size="1.2rem" stroke={2} />}
              // rightSectionWidth={70}
              onChange={(e) => setSearchKey(e.target.value)}
              // rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
              styles={{ rightSection: { pointerEvents: "none" } }}
              mb="sm"
            />
          </div>
        </div>
        <h3>Top Podcasts</h3>
        {/* HERE MAP FUNCTION WILL ARRIVE */}
        <Podcasters />
        <Podcasters />
        <Podcasters />

        <Audioplayer podcast={props.podcast} setPodcast={props.setPodcast} />
      </div>
    </>
  );
};

export default RightSidePanel;
