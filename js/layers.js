addLayer("m", { //just read the docs...
    name: "main",
    symbol: "Main",
    color: "#4BDC13",
    type: "none",
	startData() {
		return {
      distance: new Decimal(0),
			velocity: new Decimal(0),
		}
	},
	tooltip: `you have {{formatDistance(player.m.distance)}} distance`,
  timeSpeed() {
    let speed = new Decimal(1)
    return speed
  },
  maxVel() {
    let maxVel = new Decimal(1)
    return maxVel
  },
  acceleration() {
    let acc = new Decimal(0.1)
    return acc
  },
  gain() {
    let distance = player.m.velocity.times(tmp.m.timeSpeed)
    let vel = tmp.m.acceleration.times(tmp.m.timeSpeed)
    return {
      distanceGain: distance,
      velGain: vel,
    }
  },
	update(diff) {
    player.m.distance = player.m.distance.add(tmp.m.gain.distanceGain.times(diff))
    player.m.velocity = player.m.velocity.add(tmp.m.gain.velGain.times(diff)).min(tmp.m.maxVel)
	},
  row: 0,
  position: 4,
 tabFormat: `
 <br><br>
  <div v-if="tmp.m.timeSpeed.neq(1)">Time Speed: {{format(tmp.m.timeSpeed)}}x</div>
  You have gone a total of {{formatDistance(player.m.distance)}}<br>({{formatDistance(tmp.m.gain.distanceGain)}}/s)
  <br>Your current velocity is {{formatDistance(player.m.velocity)}}<br>({{formatDistance(tmp.m.gain.velGain)}}/s)
  <br>Your current Acceleration is {{formatDistance(tmp.m.acceleration)}}/s<sup>2</sup>
 `
})





