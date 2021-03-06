import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

class LanguageList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      letter: props.match.params.letter
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.letter !== prevState.letter) {
      return {
        letter: null
      };
    }
  };

  componentDidMount = () => {
    this.setState({
      letter: this.props.match.params.letter
    })
  }

  componentDidUpdate = () => {
    if (this.state.letter === null) {
      this.setState({
        letter: this.props.match.params.letter
      });
    }
  }

  getKnownLanguages = () => {

    const letter = this.state.letter;
    const languages = this.props.languages;

    let knownLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].item.name.toUpperCase().startsWith(letter)) {
        knownLanguages.push(languages[i].item);
      }
    }

    return knownLanguages;
  };

  render = () => {

    let knownLanguages = this.getKnownLanguages();

    let languages = knownLanguages.map((lang, index) => {
      return <li key={index}><a href={lang.id} target={'blank'}>{lang.name}</a></li>
    });

    return (
      <div>
        <h1>{this.state.letter}</h1>
        <ul>
          {languages}
        </ul>
      </div>
    );
  };
}

LanguageList.propTypes = {
  languages: PropTypes.array.isRequired
};

export default withRouter(LanguageList);