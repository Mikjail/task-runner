const SRC = "../mon-cricket";

const CONFIG = {
  SRC,
  STYLE_DIR: `${SRC}/styles`,
  CSS_FILES: [
    `${SRC}/styles/normalize.css`,
    `${SRC}/styles/variables.css`,
    `${SRC}/styles/style.css`,
    `${SRC}/styles/landing.css`,
    `${SRC}/styles/nav.css`,
    `${SRC}/styles/about-us.css`,
    `${SRC}/styles/rooms.css`,
    `${SRC}/styles/amenities.css`,
    `${SRC}/styles/reviews.css`,
    `${SRC}/styles/footer.css`,
    `${SRC}/styles/*.css`,
  ],
};

module.exports = CONFIG;
