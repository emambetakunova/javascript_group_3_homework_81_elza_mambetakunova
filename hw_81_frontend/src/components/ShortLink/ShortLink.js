import React, {Component} from 'react';
import {createLink} from "../../store/action";
import {connect} from "react-redux";

import './ShortLink.css'

class ShortLink extends Component {

    state = {
        originalURL: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    clickHandler = () => {
       this.props.createLink(this.state)
    };

    render() {
        console.log(this.props.link);
        return (
            <div className="ShortLink">
                <h3>Shorten your link!</h3>
                <input
                    type="text" required
                    name="originalURL" id="originalURL"
                    placeholder="Enter link"
                    value={this.state.originalURL}
                    onChange={this.inputChangeHandler}
                    className="Input"
                />
                <button onClick={this.clickHandler}>Shorten</button>
                <p>Your link now looks like this:</p>
                <a href={'http://localhost:8000/link/' + this.props.link}>{this.props.link}</a>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        link: state.link
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createLink: (linkData) => dispatch(createLink(linkData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortLink);