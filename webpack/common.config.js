import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

const uriLimit = 65000;

export const distPath = join(__dirname, '..', 'dist');
export const srcPath = join(__dirname, '..', 'src');
export const entry = [
    resolve(srcPath, 'index.ts'),
];
export const extensions = [
    '.js',
    '.ts',
    '.tsx'
];
export const rules = [
    // Templating.
    {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
    },

    // Scripts.
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
    },

    // Assets.
    {
        test: /\.gif/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/gif'
        }
    },
    {
        test: /\.jpg/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/jpeg'
        }
    },
    {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/png'
        }
    },
    {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/svg+xml'
        }
    },
    {
        test: /\.ttf/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'application/octet-stream'
        }
    },
    {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'application/font-woff'
        }
    },
    {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'font/woff2'
        }
    }
];
export const plugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(srcPath, 'favicon.png'),
        title: 'Check the latest movies',
    }),
    new webpack.DefinePlugin({
        TMDB_API_KEY: 'c69d299c41183849004c0aea72f832c0',
    }),
];
