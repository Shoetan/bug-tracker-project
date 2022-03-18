
const SignUpPageHeader = () => {
    return (
        <header className='container mx-auto mt-2 flex justify-between p-6'>

            {/* Enter the logo here */}
            <h1 className='text-dark-color font-nunito font-bold'> Bug-tracker</h1>


            <div className='flex  gap-4'>
                <p className='font-nunito text-dark-color'>Already have an account?  </p>
                <a href="http://localhost:3000/login" className='text-secondary-color hover:scale-105'>login</a>
            </div>

        </header>
    );
}

export default SignUpPageHeader;