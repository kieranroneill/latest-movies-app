import CleanPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';

// Common config.
import { distPath, entry, extensions, plugins, rules, srcPath } from './common.config';

export default {
    devtool: false,

    entry: {
        main: entry
    },

    mode: 'production',

    module: {
        rules
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // Rule of thumb: add any vendor files that are > 50kb
                    test: /react|react-dom|react-router-dom/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    output: {
        path: distPath,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    plugins: plugins.concat([
        new CleanPlugin([distPath], { root: join(__dirname, '..') }),
        new HtmlWebpackPlugin({
            title: 'Latest Movie Releases',
            inject: 'body',
            template: resolve(srcPath, 'index.hbs'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true
            }
        })
    ]),

    resolve: {
        extensions
    }
};
