declare var global: any;
import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock-jest';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.fetch = fetchMock.sandbox().mock('*', 200);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.setTimeout(30000);
