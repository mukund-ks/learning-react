import { Component } from 'react';

class Message extends Component {
    render() {
        const { msgContent, code } = this.props;
        return <h1>I'm in dire need of {msgContent}. {code} of them.</h1>;
    }
}

export default Message;