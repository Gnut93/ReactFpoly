function roundToThousand(price) {
  return Math.round(price / 100000) * 100000;
}

export default roundToThousand;
