import haversine from "haversine-distance";

export function detectClimbs(points) {
  let climbs = [];
  let segment = [];
  let segmentDist = 0;
  let segmentGain = 0;

  for (let i = 1; i < points.length; i++) {
    const p1 = points[i - 1];
    const p2 = points[i];
    const d = haversine([p1.lat, p1.lon], [p2.lat, p2.lon]);
    const e = p2.ele - p1.ele;

    segment.push({ ...p2, dist: d, elev: e });
    segmentDist += d;
    segmentGain += e;

    if (segmentDist >= 500) {
      const avgIncline = (segmentGain / segmentDist) * 100;

      if (avgIncline >= 2) {
        const points100m = scoreClimb(segment);
        climbs.push({
          start: points[i - segment.length],
          end: points[i],
          distance: segmentDist,
          incline: avgIncline,
          score: points100m,
        });
      }

      segment.shift();
      const first = segment[0];
      segmentDist -= first.dist;
      segmentGain -= first.elev;
    }
  }

  return climbs;
}

function scoreClimb(segment) {
  let score = 0;
  let i = 0;
  let bucketDist = 0;
  let bucketGain = 0;

  while (i < segment.length) {
    const { dist, elev } = segment[i];
    bucketDist += dist;
    bucketGain += elev;

    if (bucketDist >= 100) {
      const incline = (bucketGain / bucketDist) * 100;
      score += Math.round(incline);
      bucketDist = 0;
      bucketGain = 0;
    }

    i++;
  }

  return score;
}