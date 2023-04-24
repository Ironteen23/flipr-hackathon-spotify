//Video.jsx

import ReactPlayer from "react-player";
import { useState, useRef, useCallback } from "react";
// import "../App.css";
import {
  Card,
  Text,
  Group,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(200),
    width: rem(200),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },

  playerWrapper: {
    position: "relative",
    paddingTop: "86.25%",
    marginBottom: "-25%",
  },

  videoPlayer: {
    position: "absolute",
    top: "0",
  },
}));

const VPlayer = function (props) {
  const { classes } = useStyles();
  const [mute, setMute] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>();

  const onReady = useCallback(() => {
    if (!isReady) {
      //   const timeToStart = 20 * 60 + 12; //need to update from the database
      const timeToStart = 0; //need to update from the database
      playerRef?.current?.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);

  const saveDurationToDB = () => {
    const time = Number.parseFloat(
      playerRef?.current?.getCurrentTime()
    ).toFixed(2);
    //save this to the database
    console.log(time);
  };

  //   interface ReactPlayer {
  //     ref: any;
  //   }

  return (
    <>
      <div
        className={classes.playerWrapper}
        onKeyDown={(e) => {
          if (e.code === "KeyF") {
            document?.activeElement?.requestFullscreen();
          }
        }}
      >
        <ReactPlayer
          className={classes.videoPlayer}
          ref={playerRef}
          url={props.url}
          controls={props.controls === undefined ? true : props.control}
          playing={props.playing === undefined ? true : props.playing}
          muted={mute}
          height={props.height === undefined ? "58.25%" : props.height}
          width={props.width === undefined ? "100%" : props.width}
          onStart={() => {
            setMute(false);
          }}
          onReady={onReady}
          onPause={saveDurationToDB}
        />
      </div>
    </>
  );
};

export default VPlayer;
