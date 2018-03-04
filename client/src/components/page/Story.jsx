import React from 'react';

const Story = (props) => {
    console.log(props);
    let title = props.match.params.title;
    return <div>Story Page {title}</div>
};

export default Story;