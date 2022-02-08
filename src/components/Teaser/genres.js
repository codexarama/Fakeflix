export const genreFinder = (movie) => {
  let genre = [];
  for (let i = 0; i < movie.genre_ids.length; i++) {
    switch (movie.genre_ids[i]) {
      case 28:
        genre.push(`Action`);
        break;
      case 12:
        genre.push(`Adventure`);
        break;
      case 16:
        genre.push(`Animation`);
        break;
      case 35:
        genre.push(`Comedy`);
        break;
      case 80:
        genre.push(`Crime`);
        break;
      case 99:
        genre.push(`Documentary`);
        break;
      case 18:
        genre.push(`Drama`);
        break;
      case 10751:
        genre.push(`Family`);
        break;
      case 14:
        genre.push(`Fantasy`);
        break;
      case 36:
        genre.push(`History`);
        break;
      case 27:
        genre.push(`Horror`);
        break;
      case 10402:
        genre.push(`Music`);
        break;
      case 9648:
        genre.push(`Romance`);
        break;
      case 10749:
        genre.push(`Mystery`);
        break;
      case 878:
        genre.push(`Sci-fi`);
        break;
      case 10770:
        genre.push(`TV Movie`);
        break;
      case 53:
        genre.push(`Thriller`);
        break;
      case 10752:
        genre.push(`War`);
        break;
      case 37:
        genre.push(`Western`);
        break;

      case 10759:
        genre.push(`Action`);
        break;
      case 10762:
        genre.push(`Kids`);
        break;
      case 10763:
        genre.push(`News`);
        break;
      case 10764:
        genre.push(`Reality`);
        break;
      case 10765:
        genre.push(`Soap`);
        break;
      case 10767:
        genre.push(`Talk`);
        break;
      case 10768:
        genre.push(`War & Politics`);
        break;
      default:
        break;
    }
  }
  return genre.map((name) => (
    <li key={name} className="teaser_infos--genreList banner_infos--genreList">
      {name}
    </li>
  ));
};

// export const genre = [
//   { id: 28, name: 'Action' },
//   { id: 12, name: 'Adventure' },
//   { id: 16, name: 'Animation' },
//   { id: 35, name: 'Comedy' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Documentary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Family' },
//   { id: 14, name: 'Fantasy' },
//   { id: 36, name: 'History' },
//   { id: 27, name: 'Horror' },
//   { id: 10402, name: 'Music' },
//   { id: 9648, name: 'Romance' },
//   { id: 878, name: 'Science Fiction' },
//   { id: 10770, name: 'TV Movie' },
//   { id: 53, name: 'Thriller' },
//   { id: 10752, name: 'War' },
//   { id: 37, name: 'Western' },
//   { id: 10759, name: 'Action & Adventure' },
//   { id: 10762, name: 'Kids' },
//   { id: 10763, name: 'News' },
//   { id: 10764, name: 'Reality' },
//   { id: 10765, name: 'Soap' },
//   { id: 10767, name: 'Talk' },
//   { id: 10768, name: 'War & Politics' },
// ];

// export const genresName = [
//   {
//     28: 'Action',
//     12: 'Adventure',
//     16: 'Animation',
//     35: 'Comedy',
//     80: 'Crime',
//     99: 'Documentary',
//     18: 'Drama',
//     10751: 'Family',
//     14: 'Fantasy',
//     36: 'History',
//     27: 'Horror',
//     10402: 'Music',
//     9648: 'Romance',
//     878: 'Science Fiction',
//     10770: 'TV Movie',
//     53: 'Thriller',
//     10752: 'War',
//     37: 'Western',
//     10759: 'Action & Adventure',
//     10762: 'Kids',
//     10763: 'News',
//     10764: 'Reality',
//     10765: 'Soap',
//     10767: 'Talk',
//     10768: 'War & Politics',
//   },
// ];
