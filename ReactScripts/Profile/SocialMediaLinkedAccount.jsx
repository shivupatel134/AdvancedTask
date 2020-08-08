/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Button } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }



    render() {
        return (<div>
            
                <button className="ui linkedin button">
                    <i class="linkedin icon"></i>
                    LinkedIn
                </button>
                <button class="ui github secondary button">
                    <i class="github icon"></i>
                    GitHub
                </button>
            <span className="right floated">
            <button class="ui secondary  button">
                    Edit
                </button>
                </span>
        </div>)
    }

}