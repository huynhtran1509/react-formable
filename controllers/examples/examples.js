import React, { PropTypes } from 'react';
import Page from '../../components/page';
import * as Basic from './subsections/basic';

const subsections = [
    Basic
];

export default React.createClass({
    propTypes: {
        children: PropTypes.node,
        setSublinks: PropTypes.func
    },

    componentWillMount() {
        this.props.setSublinks(subsections);
        window.scrollTo(0,0);
    },

    render() {
        return <Page title="Examples"
                     className="examples"
                     subsections={subsections} />
    }
});
