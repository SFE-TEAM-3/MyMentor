import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SidaNav2() {
    return (
        <div className="SidaNav2 d-flex gap-4 justify-content-start align-items-start m-0 p-0 text-left ">
            <div className="container-fluid">
                <div className="sidnav-top d-flex justify-content-start align-items-start ">
                    <ul>
                        <li className="py-1 ">
                            {" "}
                            <Link to="#" className="text-dark fw-bold text-decoration-none">
                                {" "}
                                edit mentoring opportunity{" "}
                            </Link>{" "}
                        </li>
                        <li className="py-1">
                            {" "}
                            <Link to="#" className="text-dark fw-bold text-decoration-none">
                                {" "}
                                settings{" "}
                            </Link>{" "}
                        </li>
                        <li className="py-1">
                            {" "}
                            <Link to="#" className="text-dark fw-bold text-decoration-none">
                                {" "}
                                settingsterms and privecy{" "}
                            </Link>{" "}
                        </li>
                    </ul>
                </div>{" "}
                {/** end sidnav-top */}
                <ul className="sidnavt-bottom d-flex gap-2">
                    <Link
                        to="/PostRequest"
                        className="text-dark fw-bold text-decoration-none"
                    >
                        <li className="sidnavt-bottom-left">new mentoring request</li>{" "}
                        {/** end sidnavt-bottom-left */}
                    </Link>

                    <Link to="#" className="text-dark fw-bold text-decoration-none">
                        <li className="sidnavt-bottom-Right flex-shrink-1 bg-blue">+</li>{" "}
                        {/** end sidnavt-bottom-Right */}
                    </Link>
                </ul>
                {/** end sidnavt-bottom */}
            </div>{" "}
            {/** end container */}
        </div> /** end SidaNav2 */
    );
}

export default SidaNav2;
