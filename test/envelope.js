fs = require('fs');
parquet = require('../lib/writer.js');

var writer = new parquet.ParquetFileWriter('test.parquet');
writer.end();

// inspect file with
// $ hadoop jar parquet-tools-1.9.0.jar meta test.parquet
// $ hadoop jar parquet-tools-1.9.0.jar dump test.parquet
