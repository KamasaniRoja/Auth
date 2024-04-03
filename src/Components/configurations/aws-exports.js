const awsConfig = {
  Auth: {
    identityPoolId: 'eu-west-2:1d4033da-8d2c-4434-b7df-5d4ba398a459',
    region: 'eu-west-2',
    identityPoolRegion: 'eu-west-2',
    userPoolId: 'eu-west-2_SYzXMGyK2',
    userPoolWebClientId: '3rrlo3j2kgvtetm95pvu69mc2m',
    authenticationFlowType: 'CUSTOM_AUTH'
  },
  Analytics: {
    disabled: true
  },
  oauth: {
    domain: 'vetapp-dev.auth.eu-west-2.amazoncognito.com',
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn:
      window.location.hostname == 'localhost'
        ? 'http://localhost:3000/'
        : 'https://coolers.hibernian.vet/',
    redirectSignOut:
      window.location.hostname == 'localhost'
        ? 'http://localhost:3000/'
        : 'https://coolers.hibernian.vet/',
    responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
  }
};

export default awsConfig;
