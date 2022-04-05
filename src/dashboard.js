import DashBoardSideBar from "./dashboard-sidebar";
import Navbar from "./navbar";



const Dashboard = () => {
    return ( 
      <><Navbar />
        <div className=" flex">
          
          <DashBoardSideBar/>
      
        </div>
      </>
    );
}
 
export default Dashboard; 