const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../jsconfig.json');

const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
};
