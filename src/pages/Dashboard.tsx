import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Card from "../Components/Card/Card";
import ProcessBar from "../Components/ProcessBar/ProcessBar";
import data from "../assets/data.json";
import BarChart from "../Components/BarChart/BarChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="search">
        <form>
          <button type="submit">
            <FiSearch />
          </button>
          <input type="text" placeholder="Search for data, users, docs" />
        </form>
        <div>
          <IoIosNotificationsOutline />
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1253/1253756.png" />
          </div>
        </div>
      </div>
      <div className="cards">
        <Card name={"Revenue"} amount={"$340000"} value={40} percent={40} />
        <Card name={"Users"} amount={"400"} value={-14} percent={14} />
        <Card
          name={"Transactions"}
          amount={"$43000"}
          value={-20}
          percent={60}
        />
        <Card name={"Products"} amount={"$43000"} value={80} percent={70} />
      </div>
      <div className="dash-hero">
        <div className="rnt" style={{ flex: "flex", flexDirection: "column" }}>
          <h2>Revenue & Transactions</h2>
          <BarChart />
        </div>
        <div className="inv">
          <h2>Inventory</h2>
          {data.categories.map((item) => (
            <ProcessBar
              key={item.heading}
              value={item.value}
              heading={item.heading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
