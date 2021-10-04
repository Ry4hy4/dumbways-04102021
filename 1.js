const distanceCount= () => {
  const distanceOffice = 64500;
  let distanceInMeter = distanceOffice;
  let speed;
  let resultTime;
  // first 23 minute
  speed = 3;
  time = 23 * 60;
  resultTime = time;
  distanceIn23minute = speed * time;
  distanceInMeter -= distanceIn23minute;

  //after firts 23 minute

  speed = 5;
  time = 12 * 60;
  resultTime += time;
  distanceInsecond12Minute = speed * time;
  distanceInMeter -= distanceInsecond12Minute;

  //last speed
  const remainingDistance = distanceOffice - distanceInMeter;
  speed = 3;

  time = remainingDistance / speed;
  resultTime += time;

  const jam = Math.floor(resultTime/60/60);
  const menit = Math.floor(resultTime/60-60);
  const detik = resultTime - (jam * 60 * 60) - (menit * 60);
  console.log(`Waktu yang ditempuh ${jam}jam, ${menit}Menit, ${detik} detik`);
}

distanceCount()
