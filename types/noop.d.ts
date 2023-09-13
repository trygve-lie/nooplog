export type LogFunciton = (...args: any) => void;

/**
 * A no output logger following the Log4J interface levels.
 */
export type NoopLog = {
    trace: LogFunciton,
    debug: LogFunciton,
    info: LogFunciton,
    warn: LogFunciton,
    error: LogFunciton,
    fatal: LogFunciton
}

declare function noopLogger(logger: any): NoopLog;
export default noopLogger;