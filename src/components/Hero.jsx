import cover from "../assets/cover.jpg";
import headshot from "../assets/headshot.jpg";
import { user } from "../data/info.json";

import { FaEye, FaHeart, FaStar, FaThumbsUp } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { TbDiamondFilled } from "react-icons/tb";

const Hero = () => {
  return (
    <>
      
      <div className="max-w-4xl m-auto">
        <img
          className="max-h-60 w-full object-cover object-centre"
          src={cover}
          alt="Cover Image"
        />
        <div className="md:flex px-6">
          <img
            className="relative max-h-44 rounded-full -mt-12 border-2 border-gray"
            src={headshot}
            
            alt="Profile Picture"
          />
          <div className="md:ml-4 mt-2">
            <div className="flex items-center font-bold text-lg">
              <div className="mr-2">{user.name}</div>
              <TbDiamondFilled />
              <FcApproval />
            </div>
            <div className="text-gray-500 -mt-1">@{user.username}</div>
            <div className="text-gray-600 flex space-x-4 mt-4">
              <div className="flex flex-col items-center min-w-[72px]">
                <div className="px-4 py-1 border w-full text-center font-extrabold">
                  {user.followers}
                </div>
                <div className="text-sm">Followers</div>
              </div>
              <div className="flex flex-col items-center min-w-[72px]">
                <div className="px-4 py-1 border w-full text-center font-extrabold">
                  {user.following}
                </div>
                <div className="text-sm">Following</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-gray-700 px-6">
          <div className="text-lg">{user.bio}</div>
          <a
            href="https://github.com/deep-commits"
            className="text-teal-300 hover:text-teal-400 text-sm font-semibold"
          >
            https://github.com/deep-commits
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-6 px-6">
          <div className="flex items-center space-x-2">
            <FaStar fill="teal" /> <span className="text-xs">134</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaThumbsUp className="text-yellow-400" />{" "}
            <span className="text-xs">12</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEye fill="gray" /> <span className="text-xs">8.7K</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart fill="red" /> <span className="text-xs">2.1K</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
