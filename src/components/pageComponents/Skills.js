import React from 'react'
import PageSection from '../UI/PageSection'
import SkillSection from'./SkillSection'

export default function Skills(props) {
    let catObj = {}
    Object.keys(props.data).forEach(skill => {
        let category = props.data[skill].categories[0].name
        if (!catObj[category]) {
            catObj[category] = [props.data[skill]]
        } else {
            catObj[category].push(props.data[skill])
        }
    });


        return (
            <PageSection title={'Skills'}>
                <SkillSection title="Javascript" data={catObj.Javascript}/>
                <SkillSection title="Client" data={catObj.Client}/>
                <SkillSection title="Server" data={catObj.Server}/>
                <SkillSection title="Tools" data={catObj.Tools}/>
            </PageSection>
        )
}

