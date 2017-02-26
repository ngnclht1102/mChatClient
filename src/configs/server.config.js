const env = process.env.NODE_ENV

const environments = {
  development: {
    apiServer: 'http://localhost:3700'
  },
  production: {
    apiServer: 'http://localhost:3700'
  }
}

export default environments[env]
