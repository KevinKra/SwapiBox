export const clearRandomMovie = data => {
  const movieInfo = {
    summary: data.opening_crawl,
    title: data.title,
    releaseDate: data.release_date
  };
  return movieInfo;
};
