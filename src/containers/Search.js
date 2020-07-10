import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount = async () => {
    const { movieRows } = this.props.history.location;
    if (movieRows)
      await this.setState({ movies: movieRows });
  }

  componentDidUpdate = async (prevProps) => {
    if (
      prevProps.location.movieRows.length !==
      this.props.location.movieRows.length
    ) {
      await this.setState({ movies: this.props.location.movieRows });
    }
  }

  render() {
    const { movies } = this.state
    const { userInput } = this.props.location

    return (
      <>
        {
          this.state.movies.length > 0 ? (
            <div className="search-container">
              {this.state.movies}
            </div>
          ) : (
              <div className="no-results">
                <div className="no-results__text">
                  <p>Your search for "{userInput}" did not have any matches.</p>
                  <p>Suggestions:</p>
                  <ul>
                    <li>Try different keywords</li>
                    <li>Looking for a movie or TV show?</li>
                    <li>Try using a movie, TV show title, an actor or director</li>
                    <li>Try a genre, like comedy, romance, sports, or drama</li>
                  </ul>
                </div>
              </div>
            )
        }
      </>
    );
  }
}
