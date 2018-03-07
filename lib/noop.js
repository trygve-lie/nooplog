'use strict';

const NoopLog = class NoopLog {
    get [Symbol.toStringTag]() {
        return 'NoopLog';
    }
    fatal() {}
    error() {}
    warn() {}
    info() {}
    debug() {}
    trace() {}
};

module.exports = NoopLog;
