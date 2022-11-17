const Player = (sign) => {
  this.sign = sign;

  getSign: () => {
    return sign;
  };

  return { getSign };
};
