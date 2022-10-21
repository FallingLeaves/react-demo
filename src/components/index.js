import { ROUTER_URL } from "utils";

const ComponentApp = {}

const files = import.meta.webpackContext('./', {
  regExp: /(index\.js)$/,
  recursive: true,
})

files.keys().forEach(item => {
  const reg = /\.\/(.*?)\/index\.js/
  if (item.match(reg)) {
    const key = item.match(reg)[1]
    const module = files(item).default
    // console.log(key);
    if (module) {
      ComponentApp[module[ROUTER_URL]] = module
    }
  }
})

export { ComponentApp }