import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'

function FeaturePosts({ features }) {
    if (!features?.length) {
        return null
    }
    return (
        <FeaturePostsContainer>
            <div className="columns is-multiline">
                { features.map((article, index) => <Arcticle article={article} index={index} />) }
            </div>
        </FeaturePostsContainer>
    )
}

function Arcticle({ article, index }) {
    return (
        <div 
            className="column is-3"
            data-aos="fade-up"
            data-aos-delay={300 * (index + 1)}
        >
            <div className="article">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-title">
                            <p className="title is-3">
                                {article.title}
                            </p>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="subtitle is-4">
                            <Markdown source={article.body?.slice(0, 145)} />
                        </div>
                        <a href="#" class="read-more">Ler mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeaturePostsContainer = styled.div`
    margin: 32px 0px;
`

export default FeaturePosts