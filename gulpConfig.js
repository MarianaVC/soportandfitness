/*
*   Gulp config params
*/
module.exports = {
    sassSrcInitFile: './public/styles/site.scss',
    sassBuildDir: './public/css',
    sassWatchDir: './public/styles/**/*.scss',
    sassConfig: {
        compass: true,
        sourcemap: true,
        lineNumbers: true,
        //style: "expanded",
        style: "compressed",
        require: ["compass"]
    }
};
