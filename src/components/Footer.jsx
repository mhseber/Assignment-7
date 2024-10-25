
const Footer = () => {
    return (
        <div className="">
            <footer className="footer bg-black  h-[500px] text-base-content pl-10 pt-64">
                <nav>
                    <h6 className="footer-title text-white ">About Us</h6>
                    <p className="text-gray-600">We are a passionate team dedicated to providing <br />
                        the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Quick Links</h6>
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
            </footer>
        </div>
    );
};

export default Footer;