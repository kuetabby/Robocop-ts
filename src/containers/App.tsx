import React, { useEffect } from "react";
import RoboList from "../components/RoboList";
import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";

interface StateProps {
  searchField: string;
  robots: Array<{
    id: number;
    name: string;
    username: string;
    email: string;
  }>;
  error: string;
  isPending: boolean;
  onRequestRobot: any;
  onSearchChange: any;
}

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobots())
  };
};

function App(props: StateProps) {
  const {
    searchField,
    robots,
    isPending,
    onSearchChange,
    onRequestRobot
  } = props;

  useEffect(() => {
    onRequestRobot();
  }, [onRequestRobot]);

  const filteredRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (isPending) {
    return <h1> Loading </h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2"> Robocop </h1>

        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          <RoboList robots={filteredRobot} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
