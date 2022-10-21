import { ROUTER_URL } from "./constant";
export function setRouterUrl(obj, value) {
  try {
    obj[ROUTER_URL] = value
  } catch (error) {

  }
}