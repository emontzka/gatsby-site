import React from 'react'
import PageSection from '../UI/PageSection'
import Work from './Work';

class Works extends React.Component {
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
            <PageSection title={'Client Work'}>
                {Object.keys(this.props.data).map(work => {
                    let obj = this.props.data[work]
                    {console.log('work: ',obj)}
                    return (
                        <Work key={obj.id} data={obj} />
                    )
                })}
            </PageSection>
        )
    }
}

export default Works
