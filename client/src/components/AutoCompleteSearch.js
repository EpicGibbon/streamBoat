import React, { setState } from 'react';
import '../css/AutoCompleteText.css';
import API from '../utils/API';

export default class AutoCompleteSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            text: '',
        }

    }


    searchSeed() {
        API.getBands()
            .then((res) => {
                let bands = [];
                // for (let i = 0; i < res.data.length; i++) {
                //     const band = res.data[i].bandname
                //     bands.push(band)
                //     this.setState({ suggestions: bands })
                // }
            })
            .catch(err => console.log(err));
    }

    onTextChanged = (e) => {
        const { suggestions } = this.state;
        const value = e.target.value;
        console.log(value);
        let bandsuggestions = [];
        if (value.length > 0) {
            //this defines the pattern of characters Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
            const regex = new RegExp(`^${value}`, 'i');
            //The test() method tests for a match in a string. were passing in the value
        bandsuggestions = suggestions.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }


    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
        console.log(this.state.text);
        if (this.state.text === !"") {
        }
        API.searchband(this.state.text)
            .then((res) => {
                this.setState(() => ({
                    suggestions: res
                }))
            })
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (<ul>
            {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>)
    }

    render() {
        const { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}{this.searchSeed()}
            </div>
        )
    }
};