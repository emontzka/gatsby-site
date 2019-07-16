import React from 'react'
import PageSection from '../UI/PageSection'
import HalfPanel from '../UI/HalfPanel'

export default function Projects(props) {
    return (
        <PageSection title={'Projects'}>
            {Object.keys(props.data).map(project => {
                let obj = props.data[project]
                return (
                    <HalfPanel key={obj.id}>
                        <h2>{obj.title}</h2>
                    </HalfPanel>
                )
            })}
         
            {/* {props.data.acf.job.map(job => {
                return (
                    <Panel key={job.company}>
                        <h2>{job.company}</h2>
                        <p>{job.dates}<br />
                        {job.job_title}<br />
                        {job.location}</p>
                        <ul>
                            {job.duty_list_repeater.map((d, index) => {
                                return (
                                    <li key={index}>{d.duty}</li>
                                )
                                
                            })}
                        </ul>
                    </Panel>
                )
            })} */}
            {/* {console.log(props.data['My Reads'])} */}
        </PageSection>
    )
}