const distanceCount= () => {
  const distanceOffice = 64500;
  let distanceInMeter = distanceOffice;
  let speed
  // first 23 minute
  speed = 3;
  time = 23 * 60;
  distanceIn23minute = speed * time;
  distanceInMeter -= distanceIn23minute;

  //after firts 23 minute

  speed = 5;
  time = 12 * 60;
  distanceInsecond12Minute = speed * time;
  distanceInMeter -= distanceInsecond12Minute;

  //last speed
}

distanceCount();
