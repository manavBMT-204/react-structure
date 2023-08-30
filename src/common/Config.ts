export const Config = {
  baseURL: () => process.env.REACT_APP_URL,
  debugMode: process.env.REACT_APP_DEBUG,
  logErrors: process.env.REACT_APP_LOG_ERRORS,
  apiTimeoutTime: 18000,
  userList: {
    list: '/todos',
  },
};
