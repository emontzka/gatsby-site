import React from 'react'
import PageSection from '../UI/PageSection'
import Project from './Project';

class Projects extends React.Component {
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

        return (
            <PageSection title={'Projects'}>
                {Object.keys(this.props.data).map(project => {
                    let obj = this.props.data[project]
                    console.log('project data ',obj)
                    return (
                        <Project key={obj.id} data={obj} />
                        // <HalfPanel key={obj.id}>
                        //     {obj.featured_media && (
                        //         <ImageArea>
                        //             <ProjectImage  src={obj.featured_media.source_url} />
                        //         </ImageArea>
                        //     )}
    
                        //     <h2>{obj.title}</h2>
                        //     <p>{obj.acf.short_project_description}</p>
                        //     <button onClick={this.openPanel}>Info</button>
                        //     <InfoPanel className={this.state.panelOpen ? "open" : ""}></InfoPanel>
                        // </HalfPanel>
                        
                        
                    )
                })}
            </PageSection>
        )
    }

}

export default Projects

