import React from "react";

class SearchBar extends React.Component {
   state = { term: "" };

   onInputChange = (event) => {
      this.setState({ term: event.target.value });
   };

   onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.term);
   };

   render() {
      return (
         <div
            className="ui segment search-bar"
            style={{ backgroundColor: "#f2f2f2" }}
         >
            <form className="ui form" onSubmit={this.onFormSubmit}>
               <div className="field">
                  <div style={styles}>
                     <label>
                        <h4>Video Search</h4>
                     </label>
                  </div>
                  <div style={{ marginTop: 5 }}>
                     <input
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Search"
                        required
                     />
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;

const styles = {
   backgroundColor: "skyBlue",
   width: 98,
   height: 25,
   padding: 3,
   borderRadius: 8,
};
