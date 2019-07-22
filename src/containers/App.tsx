import React, { useEffect, useCallback } from "react";
import RoboList from "../components/RoboList";
import SearchBox from "../components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";

interface robots {
  robots: Array<{
    id: number;
    name: string;
    username: string;
    email: string;
  }>;
  error: string;
  isPending: boolean;
}

interface search {
  searchField: string;
}
interface StateProps {
  requestRobots: robots;
  searchRobots: search;
}

function App() {
  const robots = useSelector((state: StateProps) => state.requestRobots.robots);
  const isPending = useSelector(
    (state: StateProps) => state.requestRobots.isPending
  );
  const searchField = useSelector(
    (state: StateProps) => state.searchRobots.searchField
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const onSearchChange = useCallback(
    e => dispatch(setSearchField(e.target.value)),
    [dispatch]
  );

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

export default App;
