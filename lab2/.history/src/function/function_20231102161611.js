function roundToThousand(price) {
  return Math.round(price / 10000) * 10000  ;
}

export default roundToThousand;
