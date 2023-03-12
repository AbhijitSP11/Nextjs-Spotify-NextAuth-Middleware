//All the player logic here
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import spotifyApi from "../lib/spotify";

function useSpotify() {
  const { data: session, status } = useSession();
  //the useEffect changes only if there is a session
  useEffect(() => {
    if (session) {
      if (session.error == "RefreshAccessTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);
  return spotifyApi;
}

export default useSpotify;
