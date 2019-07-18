import React, { Component } from 'react'
import HalfPanel from '../UI/HalfPanel'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const ImageArea = styled.div`
    width: 100%;
    height: 250px;
    background-color: gray;
    // border: 1px solid black;
    overflow: hidden;
    margin-bottom: 30px;
`

const ProjectImage = styled.img`
    background-size: cover;
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
    &.open {
        top: 0;
    }
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
    
    render() {
        const {featured_media, title, acf} = this.props.data
        console.log('project props ', this.props)
        return (
            <HalfPanel>
                {featured_media && (
                    <ImageArea>
                        <ProjectImage  src={featured_media.source_url} />
                    </ImageArea>
                )}

                <h2>{title}</h2>
                {acf.short_project_description && (
                    <>
                    <p>{acf.short_project_description}</p>
                    
                    </>
                )}
                
                {acf.project_description && (
                    <>
                    <div style={{display: 'block', padding: '10px'}} onClick={this.openPanel}><FontAwesomeIcon icon={faEllipsisV} /></div>
                    <InfoPanel className={this.state.panelOpen ? "open" : ""}>
                        <div dangerouslySetInnerHTML={{__html: acf.project_description}} />
                    </InfoPanel>
                    </>
                )}

            </HalfPanel>
        )
    }
}
