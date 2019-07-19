import React, { Component } from 'react'
import HalfPanel from '../UI/HalfPanel'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ImageArea = styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;
    margin-bottom: 30px;
    background-image: url(${props => props.bkImage});
    background-size: cover;
    background-repeat: no-repeat;
    // border-bottom: 1px solid black;
`

const InfoPanel = styled.div`
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    z-index: 5;
    transition: top 0.3s;
    padding: 50px 20px 20px;
    &.open {
        top: 0;
    }
`

const Ellipsis = styled.div`
    padding: 10px;
    position: absolute;
    right: 20px;
    bottom: 60px;
    cursor: pointer;
`

const CloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

const IconContainer = styled.div`
    position: absolute;
    // background: pink;
    height: 40px;
    width: 100%;
    bottom: 20px;
    left: 20px;
`

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            panelOpen: false
        }
    }
    openPanel = () => {
        this.setState({
            panelOpen: true
        })
    }
    closePanel = () => {
        this.setState({
            panelOpen: false
        })
    }
    
    render() {
        const {featured_media, title, acf} = this.props.data
        console.log('project props ', this.props)
        return (
            <HalfPanel>
                {featured_media && (
                    <ImageArea bkImage={featured_media.source_url} />
                        
                )}

                <h2>{title}</h2>
                {acf.short_project_description && (
                    <p>{acf.short_project_description}</p>
                )}
                
                {acf.project_description && (
                    <>
                    <Ellipsis onClick={this.openPanel}><FontAwesomeIcon style={{fontSize: '30px'}} icon={faInfoCircle} /></Ellipsis>
                    <InfoPanel className={this.state.panelOpen ? "open" : ""}>
                        <div dangerouslySetInnerHTML={{__html: acf.project_description}} />
                        <CloseBtn onClick={this.closePanel}><FontAwesomeIcon style={{fontSize: '30px'}}  icon={faTimes} /></CloseBtn>
                        <IconContainer >
                            {acf.github && (
                                <a style={{color: '#000'}} href={acf.github} target="_blank"><FontAwesomeIcon style={{fontSize: '30px', marginRight: '15px'}}  icon={faGithub} /></a>
                            )}
                            {acf.url && (
                                <a style={{color: '#000'}} href={acf.url} target="_blank"><FontAwesomeIcon style={{fontSize: '30px', marginRight: '15px'}}  icon={faExternalLinkAlt } /></a>
                            )}
                            
                            
                        </IconContainer>
                        
                    </InfoPanel>
                    </>
                )}

            </HalfPanel>
        )
    }
}
