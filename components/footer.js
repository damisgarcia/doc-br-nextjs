import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer>
            <footer className="site-footer">
                <div className="container">
                    <div className="columns is-end">
                        <div className="column">
                            <p>Nostrud commodo occaecat aliquip incididunt commodo mollit ea et. Culpa ea consectetur voluptate ea consequat ut enim. Laboris laboris qui nisi reprehenderit reprehenderit pariatur commodo excepteur nulla incididunt.</p>
                            <CopyRightText>
                                { new Date().getFullYear() } {process.env.SITE_TITLE}. &copy; Todos os direitos reservados
                            </CopyRightText>
                        </div>
                        <div className="column">
                            <ul className="site-social-media is-flex">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #000;
    height: 33vh;
    padding: 48px 0px;
`

const CopyRightText = styled.div`
    font-size: 0.8rem;
` 

export default Footer