function roundToThousand(price) {
  return Math.round(price / 100000) * 1000;
}

export default roundToThousand;
