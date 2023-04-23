import { Carousel } from "@mantine/carousel"

export default function PreviousUploads() {
  return (
    <Carousel
      mt="md"
      withIndicators
      height={200}
      slideSize="31%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
    >
      <Carousel.Slide sx={{border: "2px solid gray", borderRadius: "0.6rem", margin: "0.4rem"}}>One</Carousel.Slide>
      <Carousel.Slide sx={{border: "2px solid gray", borderRadius: "0.6rem", margin: "0.4rem"}}>Two</Carousel.Slide>
      <Carousel.Slide sx={{border: "2px solid gray", borderRadius: "0.6rem", margin: "0.4rem"}}>Three</Carousel.Slide>
    </Carousel>
  )
}
