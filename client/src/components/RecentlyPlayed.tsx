import { useState, useEffect } from "react";

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
}));

interface ImageCardProps {
  imageLink: any;
  audioLink: any;
  Name: any;
  description: string;
  _id: string;
  setPodcast: any;
  podcast: any;
}

// interface ImageCardProps2 {
//   songid: any;
//   setSongId: any;
// }

function ImageCard({
  imageLink,
  audioLink,
  Name,
  description,
  _id,
  setPodcast,
  podcast,
}: ImageCardProps) {
  // { songid  }
  // { props }
  // { props }: any
  const { classes } = useStyles();

  console.log("OP");
  // console.log(props);
  // const [curentlyplaying, setCurentlyPlaying] = useState("");
  const handleClick = ({ Name, imageLink, audioLink }) => {
    // setCurentlyPlaying(_id);
    setPodcast({
      imgLink: imageLink,
      audioLink: audioLink,
      name: Name,
    });

    // console.log("CURRENT", _id);
    console.log("Props", podcast);
  };
  return (
    <Card
      p="lg"
      mt="md"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      // href={imageLink}
      target="_blank"
      // key={_id}
      onClick={() => handleClick({ Name, imageLink, audioLink })}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${imageLink})`,
          //   image should be in the center of the card and the excess should be cropped
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {Name}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {/* {author} */}
              Hem Mahimkar
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}

// const data = [
//   {
//     image:
//       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLIqDKGZ-8e7LyQoO6p1PbK6b3Amx7mhfyAIU9ts3Jrpr277o",
//     link: "/",
//     title: "The Internet Said So",
//     author: "Robert Gluesticker",
//     views: 7847,
//     comments: 5,
//   },
//   {
//     image:
//       "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAkyKGDMTPr7wGZ4HT7In2mXVZ05wZMnQxhn3x5YB9mWIobMyo",
//     link: "/",
//     title: "Serial",
//     author: "Robert Gluesticker",
//     views: 7847,
//     comments: 5,
//   },
//   {
//     image:
//       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWeo79NEWXN2DacZlL-56D4zYVJaKdBMQypDcJdDCFme3ezdE",
//     link: "https://mantine.dev/",
//     title: "A Show About Crypto",
//     author: "Robert Gluesticker",
//     views: 7847,
//     comments: 5,
//   },
// ];

export default function RecentlyPlayed(props) {
  const [specificdata, setSpecififcData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [sucess, setSucess] = useState(false);

  const getData = () => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((res) => setData(res.slice(0, 6)))
      .catch(() => console.log("error ocuurred"));
  };

  useEffect(() => {
    getData();
    // const arr = [{}];
    // data.map((item, i) => {
    //   arr.push(item);
    //   if (i > 6) {
    //     return;
    //   }
    // });
    // setSpecififcData(arr);
    console.log("tp");
    console.log(data);
  }, []);

  // if (datas

  const slides = data?.map((item) => <ImageCard {...item} {...props} />);
  console.log("PROP DRILLING ID", props.podcast);
  // }

  // const testingChange = () => {
  //   props.setSongId("HEM is working");
  //   console.log("changed");
  // };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",

        // textColor: "white",
        //testing purposes
        // backgroundColor: "red",
      }}
      // onClick={() => {
      //   testingChange();
      // }}
    >
      {slides ? slides : <>LOADING</>}
    </div>
  );
}
