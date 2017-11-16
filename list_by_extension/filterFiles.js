const fs = require('fs')
const path = require('path')

const filterFilesByExt = (dirPath, ext, callback) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            callback(err);
            return;
        }

        let filteredFiles = files.filter((file) => {
            if (path.extname(file) === "." + ext) {
                return file;
            }
        })
        callback(null, filteredFiles)
    })
}

module.exports = {
    filterFilesByExt: filterFilesByExt
}