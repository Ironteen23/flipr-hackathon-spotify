import Sidepanel from "./components/Sidepanel"
import { useState } from "react"
import RightSidepanel from "./components/RightSidePanel/index"
import Navbar from "./components/Navbar"
import HeroCarousel from "./components/HeroCarousel"
import { Title } from "@mantine/core"
import RecentlyPlayed from "./components/RecentlyPlayed"
import AdminDashboard from "./AdminDashboard/index"
import VPlayer from "./components/VideoPlayer/videplayer"
import VideoPodcast from "./components/VideoPodcasts/videopodcasts"
import LoginPage from "./Login"
import RegisterPage from "./Register/index"



export default function App() {
  const style = {
    // first column fit content second column reamin space
    display: "grid",
    gridTemplateColumns: "fit-content(300px) 1fr",
  }

  // const [songid, setSongId] = useState("123");
  // const [imgL , setimageL] = useState("");
  // const [audio, setaudioL] = useState("");

  const [podcast, setPodcast] = useState({
    imgLink: "1",
    audioLink: "2",
    name: "3",
  })

  const [video, setVideo] = useState(false)

  return (
    // <AdminDashboard/>
    // <RegisterPage handleRegister = {()=> { }}/>
    // <LoginPage handleLogin={()=> {}}/>

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
                <VideoPodcast video={video} setVideo={setVideo} />
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
              </section>
            </>
          )}

          <div>
            <RightSidepanel podcast={podcast} setPodcast={setPodcast} />
          </div>
        </section>
      </section>
    </div>

  )
}
