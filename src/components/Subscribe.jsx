
const Subscribe = () => {
    return (
        <div className="flex items-center justify-center mt-10 mb-[-200px]">
            <div
                className="hero   bg-white w-[1100px] h-[300px] rounded-xl"
                style={{
                    backgroundImage: `url(https://i.ibb.co.com/qj8VyvK/bg-shadow.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'

                }}>

                <div className="hero-content text-neutral-content text-center ">
                    <div className="">

                        <h1 className="mb-5 text-3xl font-bold text-black ">Subscribe to our Newsletter</h1>
                        <p className="mb-5 text-gray-800">
                            Get the latest updates and news right in your inbox!
                        </p>
                        <div className="flex justify-center items-center gap-2">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input  input-primary w-full max-w-xs" />
                            <button className="btn  bg-gradient-to-r from-pink-500 to-yellow-500">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;