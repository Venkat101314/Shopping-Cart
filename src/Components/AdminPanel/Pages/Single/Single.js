import "./single.css";
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../NavBar/NavBar"
import Chart from "../../Chart/Chart";
import List from "../../Table/Table";

const Single = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="d-flex" style={{padding:20,gap: 20}}>
          <div className="fleft">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="d-flex" style={{gap:20}}>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle1">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fright">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom4">
        <h1 className="title4">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;