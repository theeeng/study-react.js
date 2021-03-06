import React from 'react';
import Header from "./Header";
import Content from "./Content";
import StateExample from "./StateExample";
import RandomNumber from "./RandomNumber";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: Math.round(Math.random()*100)
        };
        this.updateValue = this.updateValue.bind(this);
    }

    render() {
        return (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle } body={ this.props.contentBody }/>
                <StateExample/>
                <RandomNumber number={this.state.value} onUpdate={this.updateValue}/>
            </div>
        );
    }

    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }
}

App.defaultProps = {
    headerTitle: 'Default Header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;