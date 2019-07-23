import React from 'react'
import Panel from '../UI/Panel'
import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #eee;
    border: 1px solid #aaa;
    border-radius: 3px;
    margin: 0 15px;
    padding: 10px;
`

const Image = styled.img`
    max-height: 80%;
    // max-width: 100%;
    width: auto;
    margin-bottom: 0;
`

const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`



export default function SkillSection(props) {
    let Skill = (props) => (
        <div className="skill">
            <>
            <ImageContainer>
                <Image src={props.image}/>
            </ImageContainer>
            
            <p style={{textAlign: 'center'}}>{props.title}</p>
            </>
        </div>
    )
    // const {featured_media, id, title} = props.data
    return (
        <Panel>
            <h2>{props.title}</h2>
            <SkillList>
                {props.data.map(skill => {
                    return <Skill key={skill.id} title={skill.title} image={skill.featured_media.source_url} />
                })}
            </SkillList>

        </Panel>
    )
}
