import Sidepanel from "./components/Sidepanel";
import { useState } from "react";
import RightSidepanel from "./components/RightSidePanel/index";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import { Title } from "@mantine/core";
import RecentlyPlayed from "./components/RecentlyPlayed";
import VList from "./components/VideoPodcasts/videopodcasts"
import AdminDashboard from "./AdminDashboard/index";
import VPlayer from "./components/VideoPlayer/videoplayer";

export default function App() {
  const style = {
    // first column fit content second column reamin space
    display: "grid",
    gridTemplateColumns: "fit-content(300px) 1fr",
  };

  // const [songid, setSongId] = useState("123");
  // const [imgL , setimageL] = useState("");
  // const [audio, setaudioL] = useState("");

  const [podcast, setPodcast] = useState({
    imgLink: "1",
    audioLink: "2",
    name: "3",
  });
  const [podcastV, setPodcastV] = useState({
    imageLink: "1",
    videoLink: "2",
    title: "3",
    author: "4"
  });

  const [video, setVideo] = useState(true);

  return (
    // <AdminDashboard/>

    <div style={style}>
      {/* left sidepanel */}
      <aside>
        <Sidepanel />
      </aside>

      <section>
        <Navbar />

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          {!video ? (
            <>
              <section>
                <Title>
                  Trending <span style={{ color: "gray" }}>podcasts</span>
                </Title>
                <HeroCarousel />
                <h3>
                  Trending <span style={{ color: "gray" }}>Audio Podcast</span>
                </h3>
                <RecentlyPlayed podcast={podcast} setPodcast={setPodcast} />

                <h3>
                  Trending <span style={{ color: "gray" }}>Video Podcast</span>
                </h3>
                <VList podcastV={podcastV} setPodcastv={setPodcastV} />
              </section>
            </>
          ) : (
            <>
              {/* <div style={{ display: "flex" }}> */}
              {/* <VPlayer url={"https://www.youtube.com/watch?v=OcISVEh1jyw"} />
                <RecentlyPlayed podcast={podcast} setPodcast={setPodcast} /> */}
              {/* </div> */}

              <section>
                <Title>
                  Trending <span style={{ color: "gray" }}>podcasts</span>
                </Title>
                <VPlayer url={"https://www.youtube.com/watch?v=OcISVEh1jyw"} />
                <h3>
                  Trending <span style={{ color: "gray" }}>Audio Podcast</span>
                </h3>
                <RecentlyPlayed podcast={podcast} setPodcast={setPodcast} />
                <h3>
                  Trending <span style={{ color: "gray" }}>Video Podcast</span>
                </h3>
                <VList podcastV={podcastV} setPodcastv={setPodcastV} />
              </section>
            </>
          )}

          <div>
            <RightSidepanel podcast={podcast} setPodcast={setPodcast} />
          </div>
        </section>
      </section>
    </div>
  );
}
