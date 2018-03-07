'use strict';

const NoopLog = require('../');
const tap = require('tap');

tap.test('NoopLog() - object type - should be NoopLog', (t) => {
    const log = new NoopLog();
    t.equal(Object.prototype.toString.call(log), '[object NoopLog]');
    t.end();
});

tap.test('NoopLog.*() - Object - should have "fatal", "error", "warn", "info", "debug" and "trace" methods', (t) => {
    const log = new NoopLog();
    t.type(log.fatal, 'function');
    t.type(log.error, 'function');
    t.type(log.warn, 'function');
    t.type(log.info, 'function');
    t.type(log.debug, 'function');
    t.type(log.trace, 'function');
    t.end();
});

tap.test('NoopLog.*() - Call "fatal", "error", "warn", "info", "debug" and "trace" methods - should return "undefined"', (t) => {
    const log = new NoopLog();
    t.type(log.fatal(), 'undefined');
    t.type(log.error(), 'undefined');
    t.type(log.warn(), 'undefined');
    t.type(log.info(), 'undefined');
    t.type(log.debug(), 'undefined');
    t.type(log.trace(), 'undefined');
    t.end();
});

tap.test('NoopLog() - Extend class - should override methods we extend with', (t) => {
    class CustomLog extends NoopLog {
        info(val) {
            return `hello ${val}`;
        }
    }

    const log = new CustomLog();

    // Do we have all methods?
    t.type(log.fatal, 'function');
    t.type(log.error, 'function');
    t.type(log.warn, 'function');
    t.type(log.info, 'function');
    t.type(log.debug, 'function');
    t.type(log.trace, 'function');

    // Non overriden methods should noop
    t.type(log.fatal(), 'undefined');
    t.type(log.error(), 'undefined');
    t.type(log.warn(), 'undefined');
    t.type(log.debug(), 'undefined');
    t.type(log.trace(), 'undefined');

    // Overrided method should not noop
    t.type(log.info(), 'string');
    t.ok(log.info('world'), 'hello world');

    t.end();
});
