import React, {Component} from 'react';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

class Test extends Component {

    state = {
        posts: '', 
    }

    client = contentful.createClient({
        space: "e2y903m1uual",
        accessToken:
          "5a7d209788f117b92ef5a424baaaace8000300de8fc18a5bb7539e8e0e299ed5"
    });

    componentDidMount = () => {
        this.getEntry();
    }

    getEntry = () => {
        this.client
        .getEntry('12G9jywgCo8bXPT9gSPCkr')
        .then(entry => {
            const rawRichTextField = entry.fields.richText;
            this.setState({post: documentToHtmlString(rawRichTextField)})
        })
        .catch(error => console.log(error));
    }
    
    render () {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.post}}></div>
        )
    }
}

export default Test;
