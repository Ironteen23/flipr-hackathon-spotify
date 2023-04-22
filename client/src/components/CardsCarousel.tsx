import { Carousel } from "@mantine/carousel"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { createStyles, Paper, Text, Title, Button, rem } from "@mantine/core"

const useStyles = createStyles(theme => ({
  card: {
    height: rem(360),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}))

interface CardProps {
  image: string
  title: string
  category: string
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles()

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Listen Now
      </Button>
    </Paper>
  )
}

const data = [
  {
    image: "https://pbs.twimg.com/media/FFsbhsjX0AwXCTl.jpg:large",
    title: "Waveform: The MKBHD Podcast",
    category: "technology",
  },
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/e6b28e129178459.Y3JvcCw3MDkwLDU1NDUsMCwzNjg.jpg",
    title: "The Internet Said So",
    category: "comedy",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5snKIe1TQmVNkqoVGHGo_aBL16LC8NYUSBRfoDrdhd816VLzlboBpXFWhSmFId4QSUI&usqp=CAU",
    title: "The Joe Rogan Experience",
    category: "comedy",
  },
  // {
  //   image: "https://i.scdn.co/image/ab6765630000ba8a924dc26ed7815632be010478",
  //   title: "Our Last Week",
  //   category: "comedy",
  // },
]

export default function CardsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }))

  const slides = data.map(item => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      maw={580}
      withIndicators
      height={rem(360)}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  )
}
