
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';






const DashBoardSideBar = () => {
    return ( 



        <>
            <div className="flex flex-col flex-wrap basis-2/12 bg-white-color  p-2 rounded-lg">
                
                <AssignmentTurnedInIcon />
                <h2>Task</h2>
                <button className="bg-red-900"> Logout </button>
            
            </div>

       
        
        </>
     );
}
 
export default DashBoardSideBar;