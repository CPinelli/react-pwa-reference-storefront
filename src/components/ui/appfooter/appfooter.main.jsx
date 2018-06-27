/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class AppFooterMain extends React.Component {
    goBack() {
        window.history.back();
    }
    render() {
        return (
            <div>
                <footer className="app-footer page-footer font-small blue pt-4 mt-4">
                    <div className="container-fluid text-center text-md-center">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <h5 className="text-uppercase">Vestri</h5>
                                <p>Footer content here</p>
                            </div>
                            <hr className="clearfix d-md-none pb-3" />
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                <h5 className="text-uppercase">Assistance</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/aboutus" id="footer_assistance_about_us_link">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contactus" id="footer_assistance_contact_us_link">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/termsandconditions" id="footer_assistance_terms_and_conditions_link">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                <h5 className="text-uppercase">Find us Online</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="" id="footer_social_facebook_link">
                                            <span className="share-icon-facebook"></span>facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" id="footer_social_twitter_link">
                                            <span className="share-icon-twitter"></span>twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" id="footer_social_instagram_link">
                                            <span className="share-icon-instagram"></span>instagram
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default AppFooterMain;