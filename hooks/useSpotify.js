import SpotifyWebApi from "spotify-web-api-node";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECERT,
});

function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // if refresh access token attempt fails, redirect user to login page..
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
