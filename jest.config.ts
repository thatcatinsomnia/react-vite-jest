import { type Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ".+\\.(png|jpg|jpeg|svg|webp)$": "<rootDir>/__mocks__/fileMock.ts"
  },
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
}

export default config;

