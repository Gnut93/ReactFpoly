function roundToThousand(price) {
  return Math.round(price / 1000000) * 1000;
}

export default roundToThousand;
