import { useEffect, useState } from 'react';

import { useFetch } from '../../config/useFetch';
import requests from '../../config/requests';

import './video.css';

/**
 * Video COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function Video() {
  const [trailer, setTrailer] = useState(false);
  const [movie, setMovie] = useState([]);

  // const { status, data } = useFetch(`${requests.apiMovie}${movie?.id}`);
  const { status, data } = useFetch(requests.fetchTrending);

  function handlePlay() {
    // if (status === 'fetched' && data.videos && data.videos.results) {
    //   const trailer = data.videos.results.find(
    //     (video) => video.name === 'Official Trailer'
    //   );
    //   setTrailer(trailer ? trailer : data.videos.results[0]);
    // }
    status === 'fetched' && setMovie(data);
  console.table(data.map((video) => video?.video));
}

  // console.log(movie);
  // useEffect(() => {
  //   status === 'fetched' && setMovie(data);
  // }, [data, status]);

  // console.log(status);
  // console.table(movie.map((data) => data?.video));
  // console.log(movie);

  return (
    <main className="video">
        <button className="video_player-btn" onClick={handlePlay}>PLAY</button>
        {/* <video className="video_player" src={trailer} autoPlay={true} /> */}
        <video className="video_player" src={movie[0]} autoPlay={true} />
        {/* <button className="video_player-btn">PLAY</button> */}
    </main>
  );
}

// ! ////////////////////////////////////////////////////////////////
// ! COMPLEX component ////////////////////////////////////////////////
// import { useState } from 'react';

// import axios from 'axios';
// import requests, { API_KEY } from './requests';

// import './video.css';

// /**
//  * Video COMPONENT
//  * @returns {Reactnode}   jsx in DOM
//  */
// export default function Video() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [trailer, setTrailer] = useState(null);
//   const [movie, setMovie] = useState({ title: 'Loading Movies' });

//   async function handlePlay(id) {
//     const { data } = await axios.get(`${requests.apiMovie}${id}`, {
//       params: {
//         api_key: API_KEY,
//         append_to_response: 'videos',
//       },
//     });

//     if (data.videos && data.videos.results) {
//       const trailer = data.videos.results.find(
//         (video) => video.name === 'Official Trailer'
//       );
//       setTrailer(trailer ? trailer : data.videos.results[0]);
//     }
//     setMovie(data);
//   }

//   return (
//     <main className="video">
//       {isPlaying ? (
//         <video className="video_player" src={trailer} autoPlay={true} />
//       ) : (
//         <div className="poster-content">
//           {trailer ? (
//             <button
//               className={'button play-video'}
//               onClick={() => setIsPlaying(true)}
//               type="button"
//             >
//               Play Trailer
//             </button>
//           ) : (
//             'Sorry, no trailer available'
//           )}
//           <h1>{movie?.title}</h1>
//           <p>{movie?.overview}</p>
//         </div>
//       )}
//     </main>
//   );
// }

// ! basic component ////////////////////////////////////////////////
// import { useNavigate } from 'react-router-dom';

// import trailer from '../../assets/video_netflix_intro.mp4';

// import './video.css';

// /**
//  * Video COMPONENT
//  * @returns {Reactnode}   jsx in DOM
//  */
// export default function Video() {
//   let history = useNavigate();

//   setTimeout(() => {
//     history('/');
//   }, 5000);

//   return (
//     <main className="video">
//       <video className="video_player" src={trailer} autoPlay={true} />
//     </main>
//   );
// }
