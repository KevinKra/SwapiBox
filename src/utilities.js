export const clearRandomMovie = data => {
  const movieInfo = {
    summary: data.open_crawl,
    title: data.title,
    releaseDate: data.releaseDate
  };
  return movieInfo;
};
