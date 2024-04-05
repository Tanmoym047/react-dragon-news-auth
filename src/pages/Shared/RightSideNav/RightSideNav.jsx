import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2>login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Button
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="mb-4">Find Us on</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3" />
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border-x " href="">
                    <FaTwitter className="mr-3" />
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3" />
                    Instagram
                </a>
            </div>

            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;