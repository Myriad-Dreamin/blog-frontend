/*jshint esversion: 6 */
'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"' ,
    
    
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'vue-loader',
                options: {
                    cssModules: {
                        camelcase: true,
                        // 自定义生成的类名
                        localIdentName: '[local]_[hash:base64:8]'
                    }
                }
            }
        ]
    },
});
