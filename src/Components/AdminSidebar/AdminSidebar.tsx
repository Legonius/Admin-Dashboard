import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { LuBarChart3 } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";
import { RiCoupon3Line } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import styles from "./adminSidebar.module.scss";
import { PiCoinVertical } from "react-icons/pi";

const AdminSidebar = () => {
  return (
    <aside>
      <Dashboard />
      <Charts />
      <Apps />
    </aside>
  );
};
const Dashboard = () => {
  return (
    <nav>
      <h2 className={styles.h2}>Dashboard</h2>
      <ul className={styles.uList}>
        <li className={styles.active}>
          <NavLink to={"/"}>
            <MdDashboard />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>
            <AiFillProduct />
            <span>Product</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/customers"}>
            <RiCustomerService2Line />
            <span>Customer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/transaction"}>
            <GrTransaction />
            <span>Transaction</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
const Charts = () => {
  return (
    <nav>
      <h2 className={styles.h2}>Charts</h2>
      <ul className={styles.uList}>
        <li className={styles.active}>
          <NavLink to={"/bar"}>
            <LuBarChart3 />
            <span>Bar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/pie"}>
            <FaChartPie />
            <span>Pie</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/line"}>
            <FaChartLine />
            <span>Line</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
const Apps = () => {
  return (
    <nav>
      <h2 className={styles.h2}>Apps</h2>
      <ul className={styles.uList}>
        <li className={styles.active}>
          <NavLink to={"/stopwatch"}>
            <TiStopwatch />
            <span>Stopwatch</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/coupon"}>
            <RiCoupon3Line />
            <span>Coupon</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/toss"}>
            <PiCoinVertical />
            <span>Toss</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
