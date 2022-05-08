import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  // console.log(lyric);

  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la cancion "<em><strong>${search.song}</strong></em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: No existe el Intérprete "<em><strong>${search.artist}</strong></em>"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
