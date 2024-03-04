const aosDuration = 800;
const aosDelay = 100;

const getDelay = ({ turn }) => {
  return (turn * aosDelay).toString();
};

module.exports = { aosDuration, getDelay };
