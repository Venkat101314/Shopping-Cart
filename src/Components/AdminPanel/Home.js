import SideBar from "./SideBar/Sidebar";
import NavBar from "./NavBar/NavBar";
import Widget from './Widget/Widget'
import Table from './Table/Table'
import Chart from "./Chart/Chart"
import Featured from "./Featured/Featured"
import "./home.css";

const Home = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;