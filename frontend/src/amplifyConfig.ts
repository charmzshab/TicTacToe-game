import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      // @ts-expect-error Cognito config structure not recognized by types
      region: 'us-east-2',
      userPoolId: 'us-east-2_553IGIxQ6', // your Cognito User Pool ID
      userPoolClientId: '39d73mu59m8mfk91tp1qu8m63i', // your Cognito App Client ID
    },
  },
});
