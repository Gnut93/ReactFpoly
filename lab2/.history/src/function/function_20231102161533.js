function roundToThousand(price) {
  return Math.round(price / 100000) * 10000;
}

export default roundToThousand;
