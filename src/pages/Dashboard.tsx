import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Card from "../Components/Card/Card";

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
    </div>
  );
};

export default Dashboard;
