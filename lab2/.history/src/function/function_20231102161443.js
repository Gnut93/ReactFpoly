function roundToThousand(price) {
  return Math.round(price / 10000) * 1000;
}

export default roundToThousand;
