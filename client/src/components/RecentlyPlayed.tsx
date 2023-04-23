import {
  Card,
  Text,
  Group,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core"

const useStyles = createStyles(theme => ({
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
}))

interface ImageCardProps {
  link: string
  image: string
  title: string
  author: string
}

function ImageCard({ image, title, author, link }: ImageCardProps) {
  const { classes } = useStyles()

  return (
    <Card
      p="lg"
      mt="md"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={link}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${image})`,
          //   image should be in the center of the card and the excess should be cropped
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {author}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  )
}

const data = [
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLIqDKGZ-8e7LyQoO6p1PbK6b3Amx7mhfyAIU9ts3Jrpr277o",
    link: "/",
    title: "The Internet Said So",
    author: "Robert Gluesticker",
    views: 7847,
    comments: 5,
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAkyKGDMTPr7wGZ4HT7In2mXVZ05wZMnQxhn3x5YB9mWIobMyo",
    link: "/",
    title: "Serial",
    author: "Robert Gluesticker",
    views: 7847,
    comments: 5,
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWeo79NEWXN2DacZlL-56D4zYVJaKdBMQypDcJdDCFme3ezdE",
    link: "https://mantine.dev/",
    title: "A Show About Crypto",
    author: "Robert Gluesticker",
    views: 7847,
    comments: 5,
  },
]

export default function RecentlyPlayed() {
  const slides = data.map(item => <ImageCard {...item} />)

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {slides}
    </div>
  )
}
