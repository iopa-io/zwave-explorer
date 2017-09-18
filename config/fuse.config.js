const { FuseBox, EnvPlugin, BabelPlugin, SVGPlugin, CSSPlugin, JSONPlugin, QuantumPlugin, WebIndexPlugin, Sparky } = require("fuse-box");
const path = require('path');
let fuse, app, vendor, isProduction;

exports.initBuilder = function ({ paths, srcDir, targetDir, port, env }) {

    Sparky.task("config", () => {
        fuse = new FuseBox({
            homeDir: srcDir,
            sourceMaps: !isProduction,
            hash: isProduction,
            cache: !isProduction,
            output: path.join(targetDir, '$name.js'),
            plugins: [
                EnvPlugin(env),
                SVGPlugin(),
                 CSSPlugin(),
                JSONPlugin(),
                WebIndexPlugin({ template: path.join(srcDir, 'index.html'), path: './', }),
                BabelPlugin({
                    config: {
                        sourceMaps: !isProduction,
                        plugins: ["transform-decorators-legacy"],
                        presets: ["es2015", "react", 'stage-0'],
                    }
                }),
                isProduction && QuantumPlugin({ removeExportsInterop: false, uglify: true })]
        });
        //   vendor = fuse.bundle("vendor").target('browser').instructions("~ index.js")
        app = fuse.bundle("app").target('browser').instructions("> index.js")
    });

    Sparky.task("default", () => null);

    Sparky.task("dev", ["clean", "config", "static"], () => {

        fuse.dev({ port: port });
        app.watch().hmr()
        return fuse.run();
    });

    Sparky.task("static", () => {
        if (Array.isArray(paths.appPublic)) {
            return Promise.all(
                paths.appPublic.map(function (pathPublic) {
                    return Sparky.watch(pathPublic + "/**/*").dest(targetDir);
                })
            );
        } else {
            return Sparky.watch(paths.appPublic + "/**/*").dest(targetDir);
        }
    });

    Sparky.task("clean", () => Sparky.src(targetDir).clean(targetDir));

    Sparky.task("prod-env", ["clean"], () => { isProduction = true })

    Sparky.task("dist", ["prod-env", "config", "static"], () => {
        return fuse.run();
    });

    return { start: function (tname) { return Sparky.start(tname); } }

}
