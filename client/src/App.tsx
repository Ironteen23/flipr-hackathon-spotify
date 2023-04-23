import Sidepanel from './components/Sidepanel'
import RightSidepanel from './components/RightSidePanel/index'
import Navbar from './components/Navbar'
import CardsCarousel from './components/CardsCarousel'
import { Title } from '@mantine/core'

export default function App() {
  const style = {
    // first column fit content second column reamin space
    display: 'grid',
    gridTemplateColumns: 'fit-content(300px) 1fr',
  }

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
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
          }}
        >
          <section>
            <Title>
              Trending <span style={{ color: 'gray' }}>podcasts</span>
            </Title>
            <CardsCarousel />
          </section>

          <div>
            <RightSidepanel />
          </div>
        </section>
      </section>
    </div>
  )
}
