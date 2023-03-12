import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { SlFeed } from "react-icons/Sl";
import { BsCollectionPlay } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import Playlists from "./Playlists";
import Image from "next/image";
// import Playlists from "./Playlists";

function Sidebar() {
  const { data: session, status } = useSession();
  const [showPlaylist, setShowPlaylist] = useState(false);
  const openPlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  console.log(session, "session");
  return (
    <div className="flex">
      <div
        className="text-gray-500 text-sm lg:text-xs border-r bg-[#121212] border-gray-900 h-screen w-28 sm:max-w-[12rem] lg:max-w-[15rem] hidden
      md:inline-block pb-36"
      >
        <div className="space-y-4 flex flex-col">
          <button className="flex flex-col items-center space-x-2 hover:text-white mt-5 ">
            <AiOutlineHome className="h-5 w-5" />
            <p>Home</p>
          </button>
          <button className="flex flex-col items-center space-x-2 hover:text-white mt-5 ">
            <AiOutlineSearch className="h-5 w-5" />
            <p>Search</p>
          </button>
          <button className="flex flex-col items-center space-x-2 hover:text-white  mt-5 ">
            <VscLibrary className="h-5 w-5" />
            <p>Library</p>
          </button>
          <button
            className="flex flex-col items-center space-x-2 hover:text-white  mt-5"
            onClick={openPlaylist}
          >
            <BsCollectionPlay className="h-5 w-5" />
            <p>Playlist</p>
          </button>
          <button className="flex flex-col items-center space-x-2 hover:text-white  mt-5 ">
            <AiOutlineHeart className="h-5 w-5" />
            <p>Liked S</p>
          </button>
          <button className="flex flex-col items-center space-x-2 hover:text-white  mt-5 ">
            <SlFeed className="h-5 w-5" />
            <p>Episode</p>
          </button>
        </div>
      </div>
      {showPlaylist && <Playlists />}
    </div>
  );
}

export default Sidebar;
