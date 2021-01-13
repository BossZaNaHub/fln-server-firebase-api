import chalk = require("chalk")

const getTimeStmap = (): string => {
  return new Date().toISOString()
}
const ctx = new chalk.Instance({level: 1})
const green = ctx.greenBright
const blue = ctx.blue
const yellow = ctx.yellow
const red = ctx.red

const info = (namespace: string, message: string, obj?: any) => {
  if (obj) {
    console.log(
        `[${green(getTimeStmap())}] ${blue("[INFO]")} [${namespace}] ${message}`
        , obj)
  } else {
    console.log(
        `[${green(getTimeStmap())}] ${blue("[INFO]")} [${namespace}] ${message}`
    )
  }
}

const warn = (namespace: string, message: string, obj?: any) => {
  if (obj) {
    console.warn(
        `[${green(getTimeStmap())}] ${yellow("[WARN]")} [${namespace}] ${message}`
        , obj)
  } else {
    console.warn(
        `[${green(getTimeStmap())}] ${yellow("[WARN]")} [${namespace}] ${message}`
    )
  }
}

const error = (namespace: string, message: string, obj?: any) => {
  if (obj) {
    console.error(
        `[${green(getTimeStmap())}] ${red("[ERROR]")} [${namespace}] ${message}`
        , obj
    )
  } else {
    console.error(
        `[${green(getTimeStmap())}] ${red("[ERROR]")} [${namespace}] ${message}`
    )
  }
}

const debug = (namespace: string, message: string, obj?: any) => {
  if (obj) {
    console.debug(`[${getTimeStmap()}] [DEBUG] [${namespace}] ${message}`, obj)
  } else {
    console.debug(`[${getTimeStmap()}] [DEBUG] [${namespace}] ${message}`)
  }
}

export const Logger = {
  info,
  warn,
  error,
  debug,
}
