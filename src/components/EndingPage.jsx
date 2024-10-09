import React from 'react'

function EndingPage() {
    return (
        <div className='w-full   bg-teal-900 p-28  sm:min-w-[40rem] md:min-w-[48px] flex lg:flex-row justify-between items-center max-sm:flex-col '>
            
            <div className="w-[400px] rounded-lg ">
                <div className="p-4 ">
                    <h1 className="text-4xl font-semibold text-white"> Creative minds <br />Creative lifestyles</h1>
                    <p className="mt-3 text-sm text-white">
                        this page is espacially design to explore the new world or yours and show the world the how much creative you yoy its always exciting to add new blogs about different things
                    </p>

                </div>
            </div>



            <div className="w-[300px] rounded-lg bg-[#cbebdf] ">
                <div className='min-h-72 '>
                    <img src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                        className='object-cover w-full h-72 rounded-lg' />
                </div>
            </div>

        </div>
    )
}

export default EndingPage
