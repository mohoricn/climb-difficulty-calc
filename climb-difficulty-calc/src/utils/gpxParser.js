import { parseStringPromise } from "xml2js";

export async function parseGPX(fileContent) {
  const parsed = await parseStringPromise(fileContent);
  const trkpts = parsed.gpx.trk[0].trkseg[0].trkpt;

  return trkpts.map((pt) => ({
    lat: parseFloat(pt.$.lat),
    lon: parseFloat(pt.$.lon),
    ele: parseFloat(pt.ele[0]),
  }));
}