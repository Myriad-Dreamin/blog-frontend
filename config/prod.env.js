/*jshint esversion: 6 */
'use strict';
module.exports = {
    NODE_ENV: '"production"',
  
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
};
