import configCommon from './common.json'
const configEnv = require(`./${process.env.NODE_ENV}.json`)

const evnVarNames = ['VITE_PROVIDER_SOCKETVITE_']
const envVars = evnVarNames.reduce((mem, n) => {
  // Remove the `VITE_` prefix
  if (process.env[n] !== undefined) mem[n.slice(5)] = process.env[n]
  return mem
}, {})

const config = {
  ...configCommon,
  ...configEnv,
  ...envVars,
}

export default config