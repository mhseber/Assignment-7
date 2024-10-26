import PropTypes from 'prop-types';
import bannerImg from '/img/banner-main.png'

const Banner = ({ addCoin }) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className="hero   bg-black w-[1100px] h-[500px] rounded-xl"
                style={{
                    backgroundImage: `url(https://i.ibb.co.com/qj8VyvK/bg-shadow.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'

                }}>

                <div className="hero-content text-neutral-content text-center ">
                    <div className="">
                        <img className="lg:pl-48 pl-20 pb-8 " src={bannerImg} alt="" />
                        <h1 className="mb-5 text-3xl font-bold ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 text-gray-400">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button onClick={addCoin} className="btn btn-outline btn-warning   ">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    addCoin: PropTypes.func.isRequired,
};

export default Banner;