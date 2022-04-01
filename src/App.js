import { nanoid } from "nanoid";
import React from "react";
import WatchesForm from "./components/WatchesForm";
import WatchesPreview from "./components/WatchesPreview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: []
    };
  };


  handleRemove = (id) => {
    this.setState((state) => {
      return {
        clock: state.clock.filter((el) => el.id !== id)
      };
    });
  };

  handleAddClock = (value) => {
    this.setState((state) => {
        return {
          clock: [...state.clock, {
            name: value.name,
            time: value.time,
            id: nanoid()
        }]
      };
    });
  };

  render() {
    return (
      <>
        <WatchesForm
          handleAddClock={this.handleAddClock}/>
        <div className="watches-list">
          {this.state.clock.map((el) => 
          <WatchesPreview
            clock={el}
            handleRemove={this.handleRemove}
            key={el.id}/>
          )}
        </div>
      </>
    );
  };

};
