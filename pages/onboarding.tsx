export default function Onboarding(){

    return(
        <>
            <main className="flex">
                <div className="w-5/6 max-w-5xl mx-auto">
                    <div className="w-full flex">
                        <div className="flex mx-auto my-10">
                            <img src="superwordicon.svg" className="my-auto mx-1"></img>
                            <p className="text-black dark:text-white text-2xl text-center font-bold mx-1">
                                Superword
                            </p>
                        </div>
                    </div>
                    <div className="w-full mb-8">
                        <div className="panel max-w-4xl mx-auto flex">
                            <div className="mt-20 mx-auto relative">
                                <img src="onboardingimage.jpg"></img>
                                <div className="twittericontag backdrop-opacity-20 px-3 py-3 backdrop-invert bg-white/10 rounded-full absolute">
                                    <img src="twittericon.svg" className="twitter-icon"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="subtitle mx-auto">
                            <p className="text-black dark:text-white text-center text-4xl pb-3">Works anywhere you work</p>
                            <p className="text-black dark:text-white text-center">
                            Monitor your email servers for the most common cause of email deliverability issues. Get notified as soon as one of your IP addresses or domains get listed on any of over 120 real-time blacklists.ore people.
                            </p>
                        </div>
                    </div>

                    <div className="w-full pt-3">
                        <div className="subtitle mx-auto flex justify-center">
                            <div className="pagespan bg-spannormal"></div>
                            <div className="pagespan bg-spanactive"></div>
                            <div className="pagespan bg-spannormal"></div>
                            <div className="pagespan bg-spannormal"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute gradient-panel">
                    
                </div>
            </main>
        </>
    )

}