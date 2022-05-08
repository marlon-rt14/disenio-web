import React from "react";

const SongArtist = ({ artist }) => {
  const styles = {
    position: "relative",
  };

	const stylesImg = {
		maxWidth: "100%",
		height: "auto"
  };

  return (
    <section style={styles}>
      <h3>{artist.strArtist}</h3>
      <img
        src={artist.strArtistThumb}
        alt={artist.strArtist}
        style={stylesImg}
      />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        sitio Web Oficial
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
