
const LoginPageHeader = () => {

    return (
        <header className='container mx-auto mt-2 flex justify-between p-6'>

            <h1 className='text-dark-color font-nunito font-bold'> Bug-tracker</h1>


            <div className="flex  gap-4">
                <p className='font-nunito text-dark-color'>Don't have an account?</p>
                <a href="http://localhost:3000/" className='text-secondary-color hover:scale-105'>create one</a>
            </div>


        </header>
    );
}

export default LoginPageHeader;