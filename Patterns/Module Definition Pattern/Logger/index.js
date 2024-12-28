const loggerV1 = require('./loggerV1');
const loggerV2 = require('./loggerV2');

// logger v1
loggerV1.info("This is an info message");
loggerV1.warning("This is an warning message");
loggerV1.error("This is an error message");

// logger v2
loggerV2('This is an info message');
loggerV2.warning('This is a warning message');
loggerV2.error('This is an error message');