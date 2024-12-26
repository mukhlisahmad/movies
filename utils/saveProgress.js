export const SaveProgress = (
  movieid,
  season,
  episode,
  currentTime,
  thumbnail,
  duration,
  title,
  media_type
) => {
  const localStorageData = localStorage.getItem("watch_history") || '{}';
  const jsonifyLocalStorageData = JSON.parse(localStorageData) || {};


  const updatedData = {
    ...jsonifyLocalStorageData,
    [movieid]: {
      movieid,
      season,
      episode,
      currentTime,
      thumbnail,
      duration,
      title,
      media_type,
      updatedDate: new Date().valueOf()
    }
  };

  localStorage.setItem("watch_history", JSON.stringify(updatedData));
};
