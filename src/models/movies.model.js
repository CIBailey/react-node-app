module.exports = (mongoose) => {
  const Movie = mongoose.model(
    "movie",
    mongoose.Schema(
      {
        title: String,
        alternative_titles: Array,
        year: Number,
        image: String,
        color: String,
        score: Number,
        rating: Array,
        actors: Array,
        actor_facets: Array,
        genre: Array,
        objectID: String,
      },
      { timestamps: true }
    )
  );

  return Movie;
};
