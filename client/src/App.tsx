import Sidepanel from "./components/Sidepanel";
import RightSidepanel from "./components/RightSidePanel/index";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import { Title } from "@mantine/core";
import RecentlyPlayed from "./components/RecentlyPlayed";

export default function App() {
  const style = {
    // first column fit content second column reamin space
    display: "grid",
    gridTemplateColumns: "fit-content(300px) 1fr",
  };

  return (
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
          <section>
            <Title>
              Trending <span style={{ color: "gray" }}>podcasts</span>
            </Title>
            <HeroCarousel />
            <RecentlyPlayed />
          </section>

          <div>
            <RightSidepanel />
          </div>
        </section>
      </section>
    </div>
  );
}
