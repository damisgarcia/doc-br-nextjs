import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import posed from 'react-pose'

const FadeBottomPose = posed.div({
    enter: {
        opacity: 1,
        y: 0,
        transition: ({ delay }) => {
            return {
                delay: delay || 200,
                duration: 800
            }
        }
    },
    exit: {
        opacity: 0,
        y: '8vh'
    }
})

function HomeLayout({ data, children }) {
    const [isDone, setDone] = useState(false)

    useEffect(() => {        
        function startHome() {
            // Play video
            const video = document.getElementById('video')
            video.onloadeddata = () => {
                video.play()
                // Done Page
                setDone(true)
            }
        }

        startHome()
    }, [])


    return (
        <>
            <CanvasWrap>
                <CanvasContent>
                    <CanvasTitleGroup 
                        initalPose="exit" 
                        pose={isDone ? 'enter' : 'exit'}
                        delay={600}
                    >
                        <CanvasTitle>DOC-BR</CanvasTitle>
                        <CanvasSubtitle>Mollit nulla deserunt minim minim Lorem adipisicing anim.</CanvasSubtitle>
                        <button className="button is-medium">Decubra mais sobre a Amazônia</button>
                    </CanvasTitleGroup>
                </CanvasContent>
                <Video 
                    id="video" 
                    allow="autoplay"
                    loop={true}
                    muted
                >
                    <source
                        src={data.strapiSite.PresentationVideo.publicURL}
                        type="video/mp4"
                    />
                </Video>
                <CanvasCard 
                    initalPose="exit" 
                    pose={isDone ? 'enter' : 'exit'}
                    delay={1200}
                >
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img 
                                            className="is-rounded" 
                                            src="https://bulma.io/images/placeholders/96x96.png" 
                                            alt="Placeholder image" 
                                        />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-5">John Pescocim</p>
                                    <p className="subtitle is-6">@johnpescocim</p>
                                </div>
                            </div>
                            <p>Est mollit duis aliqua nulla Lorem in aute incididunt est voluptate laboris.</p>
                        </div>
                    </div>
                </CanvasCard>
            </CanvasWrap>
            <Container>
                <main>
                    { children }
                </main>
            </Container>
        </>
    )
}

const CanvasWrap = styled.div`
    position: relative;
    background-color: black;
    padding-bottom: 56.25%;
    width: 100%;
    height: 0;
`

const CanvasContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;    
    padding: 0px 6rem;
    z-index: 5;
`

const CanvasTitleGroup = styled(FadeBottomPose)`
    max-width: 30rem;
`

const CanvasTitle = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-size: 64px;
    font-weight: bold;
    color: white;
`

const CanvasSubtitle = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: normal;
    line-height: 1.5;
    color: white;
    margin-bottom: 2rem;
`

const CanvasCard = styled(FadeBottomPose)`
    position: absolute;
    bottom: 10rem;
    right: 6rem;
    width: 100%;
    max-width: 24rem;
    flex-direction: row;
    z-index: 5;
`

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    z-index: 1;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`
export default HomeLayout