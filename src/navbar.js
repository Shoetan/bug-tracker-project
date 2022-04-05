import SearchIcon from '@material-ui/icons/Search';


const Navbar = () => {
    return (
<>
        <div className="flex  bg-secondary-color p-2 justify-end items-center gap-6 pr-6 sticky top-0">

            {/* Search field with a search icon */}
            <div className='flex bg-primary-color items-center justify-center rounded-md p-1'>
                    <SearchIcon style={{ color: "#1b1c1e"}}/>
                <input type="text" className='bg-primary-color outline-none rounded-md ' />
              
            </div>

            {/* Add bug button */}
            <div>
                <button className='bg-primary-color text-dark-color p-2 rounded-md font-nunito hover:scale-105' >New Ticket</button>
            </div>

        </div>

     

        </>

    );
}

export default Navbar;