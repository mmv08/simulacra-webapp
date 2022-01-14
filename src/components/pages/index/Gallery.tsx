import styled from "@emotion/styled"
import { Scene, Controller } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding-top: 10rem;
  margin-bottom: 15rem;
`

const GalleryContent = styled.div`
  width: 578px;
  height: 578px;
  position: relative;

  p {
    position: absolute;
    bottom: -30px;
    left: 0;
  }

  @media screen and (max-width: 578px) {
    width: 280px;
    height: 280px;
  }
`

const SampleImage = styled.img<{ zIndex?: number }>`
  position: absolute;
  z-index: ${(props) => props.zIndex || 1};

  @media screen and (max-width: 578px) {
    width: 280px;
    height: 280px;
  }
`

const Gallery = (): React.ReactElement => (
  <div className="gallery-animation-trigger">
    <Controller>
      <Scene
        duration={2000}
        triggerElement=".gallery-animation-trigger"
        triggerHook="0"
        pin
        indicators={process.env.NODE_ENV === "development"}
      >
        {(progress: number) => (
          <GalleryContainer>
            <Timeline totalProgress={progress} wrapper={<GalleryContent />} paused>
              <SampleImage src="/assets/sim_sample_6.png" width={578} height={578} alt="SIM sample image" />
              <Tween to={{ display: "none" }} duration={400}>
                <SampleImage
                  src="/assets/sim_sample_1.png"
                  width={578}
                  height={578}
                  alt="SIM sample image"
                  zIndex={6}
                />
              </Tween>
              <Tween to={{ display: "none" }} duration={400}>
                <SampleImage
                  src="/assets/sim_sample_2.png"
                  width={578}
                  height={578}
                  alt="SIM sample image"
                  zIndex={5}
                />
              </Tween>
              <Tween to={{ display: "none" }} duration={400}>
                <SampleImage
                  src="/assets/sim_sample_3.png"
                  width={578}
                  height={578}
                  alt="SIM sample image"
                  zIndex={4}
                />
              </Tween>
              <Tween to={{ display: "none" }} duration={400}>
                <SampleImage
                  src="/assets/sim_sample_4.png"
                  width={578}
                  height={578}
                  alt="SIM sample image"
                  zIndex={3}
                />
              </Tween>
              <Tween to={{ display: "none" }} duration={400}>
                <SampleImage
                  src="/assets/sim_sample_5.png"
                  width={578}
                  height={578}
                  alt="SIM sample image"
                  zIndex={2}
                />
              </Tween>
              <p>Sample Piece</p>
            </Timeline>
          </GalleryContainer>
        )}
      </Scene>
    </Controller>
  </div>
)

export default Gallery
