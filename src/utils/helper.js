import { ROUTER_URL } from "./constant";
export function setRouterUrl(obj, value) {
  try {
    obj[ROUTER_URL] = value
  } catch (error) {

  }
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}