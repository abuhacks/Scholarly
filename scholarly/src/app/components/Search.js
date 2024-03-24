import React from "react";

class Search extends React.Component {
  state = { title: "" };

  onSearchChanged = (event) => {
    const _title = event.target.value;

    this.setState({ title: _title });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              value={this.state.title}
              onChange={this.onSearchChanged}
              id="video-search"
              type="text"
              placeholder="Enter Search Keyword"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;