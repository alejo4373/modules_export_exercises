const filterFiles = require('./filterFiles')


                            //dir path          //ext
filterFiles.filterFilesByExt(process.argv[2], process.argv[3], (err, list) => {
    if (err) {
        console.log("There was an error ---> " + err)
    } else {
        list.forEach(item => {
            console.log (item)
        });
    }
})