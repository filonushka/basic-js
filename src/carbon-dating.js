const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = (0.693 / HALF_LIFE_PERIOD);

// module.exports = function dateSample(sampleActivity) {
//   if (typeof sampleActivity !== 'string' || sampleActivity === '' || !Number(sampleActivity) || Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) < 0) return false;
//   let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
//   return Math.ceil(t);
// }; 


module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const activityNumber = Number(sampleActivity);

  if (activityNumber <= 0 && activityNumber > MODERN_ACTIVITY) {
    let t = Math.log(MODERN_ACTIVITY / activityNumber) / k;
    return Math.ceil(t);
  }

  return false;
}; 