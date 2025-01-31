import footerImg from '/img/logo-footer.png'

const Footer = () => {
    return (
        <div className=" bg-black    ">
            <footer className=" pt-64 px-0 ">
                <div className="flex items-center justify-center pb-4 ">
                    <img src={footerImg} alt="" />
                </div>
                <div className="lg:flex md:mb-10 justify-around pt-8 pb-36">
                    <nav>
                        <h6 className="footer-title text-white  ">About Us</h6>
                        <p className="text-gray-600">We are a passionate team dedicated to providing <br />
                            the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white ">Quick Links</h6>
                        <li><a className="link link-hover text-gray-600">Home</a></li>
                        <li><a className="link link-hover text-gray-600">Services</a></li>
                        <li><a className="link link-hover text-gray-600">About </a></li>
                        <li><a className="link link-hover text-gray-600">Contact </a></li>


                    </nav>


                    <form>
                        <h6 className="footer-title text-white">Subscribe</h6>
                        <fieldset className="form-control w-80 gap-2">
                            <p className="text-gray-600">Subscribe to our newsletter <br /> for the latest updates.</p>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </footer>

        </div>
    );
};

export default Footer;