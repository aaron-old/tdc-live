import React, {Component} from 'react';
import PageRouter from './PageRouter';

class Page extends Component {
    render() {
        return (
            <section className="page">
                <PageRouter/>
            </section>
        );
    }
}


export default Page;