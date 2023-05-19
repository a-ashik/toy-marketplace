import React from 'react';

const Footer = () => {
    return (
        <div className='text-center mp-5'>
            {/* <h5>This is copyright of our website</h5>  */}
        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Youtube</li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>Link 1</li>
                            <li>Link 2</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright: Toy World
            </div>

        </footer>
        </div>
    );
};

export default Footer;