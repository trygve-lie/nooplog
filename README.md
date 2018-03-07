# nooplog

[![Dependencies](https://img.shields.io/david/trygve-lie/nooplog.svg?style=flat-square)](https://david-dm.org/trygve-lie/nooplog)[![Build Status](http://img.shields.io/travis/trygve-lie/nooplog/master.svg?style=flat-square)](https://travis-ci.org/trygve-lie/nooplog)

An no output logger class - Implements a log interface with methods which does not output anything.

The API of this logger conforms to the standard [Log4j interface](https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html) levels.

The sole purpose of this module is to act as a base class which one can extend upon. It is mainly
created to ease making log helper objects which work with [abslog](https://github.com/trygve-lie/abslog).


## Installation

```bash
$ npm install nooplog
```


## Usage

In your module(s):

```js
const NoopLog = require('nooplog');
const log = new NoopLog();

log.fatal()  // undefined
log.error()  // undefined
log.warn()  // undefined
log.info()  // undefined
log.debug()  // undefined
log.trace()  // undefined
```


## Interface

`nooplog` takes zero arguments.


## Methods

`nooplog` has the followin methods.

 * fatal()
 * error()
 * warn()
 * info()
 * debug()
 * trace()

All methods return `undefined`.


## Extending

One can extend this module as follow:

```js
const NoopLog = require('nooplog');
class CustomLog extends NoopLog {
    info(val) {
        return `hello ${val}`;
    }
}
```

Then it can be used as follow:

```js
const log = new CustomLog();

log.fatal()  // undefined
log.error()  // undefined
log.warn()  // undefined
log.debug()  // undefined
log.trace()  // undefined

log.info('world :D')  // hello world :D
```


## License

The MIT License (MIT)

Copyright (c) 2018 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
