import PropTypes from 'prop-types';
import logo from '/img/logo.png'
import coinImg from '/img/coin.png'

const Navbar = ({ coin }) => {
    return (
        <div className="pt-4 p-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <img className='pl-5' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-base font-normal text-[#131313B3]">
                        <div className="flex ml-[500px] font-bold">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="border border-red-100 rounded-md flex w-[200px] h-[52px] pl-10 pt-3  text-base font-semibold">
                        {coin} Coin <img className="w-[20px] h-[20px] mt-1 ml-1  " src={coinImg} alt="" /></a>

                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coin: PropTypes.func.isRequired,
};

export default Navbar;