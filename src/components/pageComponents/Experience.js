import React from 'react'
import PageSection from '../UI/PageSection'
import Panel from '../UI/Panel'

export default function Experience(props) {
    return (
        <PageSection title={'Experience'}>
            {props.data.acf.job.map(job => {
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
                    
                
            })}
        </PageSection>
    )
}
