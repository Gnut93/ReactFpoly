function roundToThousand(price) {
  return Math.round(price / 1000) * 10000;
}

export default roundToThousand;
