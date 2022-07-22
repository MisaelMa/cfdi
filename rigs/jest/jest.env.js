const { format } = require('util');

process.env.DISABLE_MOCKED_WARNING = true;

Object.defineProperty(Intl, 'DateTimeFormat', {
  writable: true,
  value: () => ({
    resolvedOptions: jest.fn(() => ({
      timeZone: 'America/New_York',
    })),
  }),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: () => jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
  })),
});

// // To prevent unhandled unit test fails and props warnings
global.console.error = function(...args) {
  throw(format(...args));
};
