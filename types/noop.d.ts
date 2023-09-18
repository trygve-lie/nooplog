export type LogFunction = (...args: any) => void;

/**
 * A no output logger following the Log4J interface levels.
 */
export type NoopLog = {
    trace: LogFunction,
    debug: LogFunction,
    info: LogFunction,
    warn: LogFunction,
    error: LogFunction,
    fatal: LogFunction
}

declare function noopLogger(logger: any): NoopLog;
export default noopLogger;
