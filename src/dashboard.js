import DashboardMain from "./dashboard-main";
import DashBoardSideBar from "./dashboard-sidebar";
import Navbar from "./navbar";



const Dashboard = () => {
    return ( 
      <><Navbar />
        <div className="flex mt-1 px-2 gap-2">
          
          <DashBoardSideBar />
          <DashboardMain/>
      
        </div>
      </>
    );
}
 
export default Dashboard; 