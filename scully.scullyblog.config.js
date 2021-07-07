"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: "./src",
    projectName: "scullyblog",
    outDir: './dist/static',
    routes: {
        '/posts/:id': {
            type: 'contentFolder',
            id: {
                folder: "./mdfiles"
            }
        },
    },
    puppeteerLaunchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
};
