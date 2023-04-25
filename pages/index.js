import HeroBanner from "@/components/HeroBanner";
import Intro from "@/components/Intro";
import ProductArea from "@/components/ProductArea";
import Wrapper from "@/components/Wrapper";


export default function Home() {
  return (
    <>
      <main>
        <HeroBanner />

        <Wrapper>
          <Intro />
          <ProductArea />
        </Wrapper>

      </main>
    </>
  )
}
