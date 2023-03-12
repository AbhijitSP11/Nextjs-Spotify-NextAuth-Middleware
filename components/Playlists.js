import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { BsCollectionPlay } from "react-icons/bs";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

function Playlists() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  console.log("Picked playlist", playlistId);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  console.log(playlists, "session");

  return (
    <div className="flex flex-col ml-[-20px] bg-[#0F0F0F] fixed top-0 left-32 h-[90vh] w-72 z-10 rounded-lg scrollbar-thumb-green-900 scrollbar-track-black scrollbar-thin scrollbar-thumb-rounded">
      <div className="flex flex-row text-white space-x-5 items-center p-5">
        <BsCollectionPlay className="w-6 h-8" />
        <h1>Playlists</h1>
      </div>
      {playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="flex  text-white space-x-3 items-center opacity-90 hover:opacity-70 cursor-pointer rounded-full p-5 "
        >
          <img
            className="rounded-full w-10 h-10"
            src={playlist.images[0].url}
            alt="playlist"
          ></img>
          <h2 onClick={() => setPlaylistId(playlist.id)}>{playlist.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Playlists;
