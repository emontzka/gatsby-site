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
                    return (
                        <Project key={obj.id} data={obj} />
                    )
                })}
            </PageSection>
        )
    }
}

export default Projects

