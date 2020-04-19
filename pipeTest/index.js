import {createReadStream, createWriteStream} from "fs"
import archiver from "archiver"

const packageFile = "package.json";
const indexFile = "index.js"

let archive = archiver('zip');

const packageStream = createReadStream(packageFile);
const indexStream = createReadStream(indexFile);
const outputStream = createWriteStream("output.zip");
archive.append(packageStream, {name : packageFile});
archive.append(indexStream, {name : indexFile});
archive.finalize();
archive.pipe(outputStream);