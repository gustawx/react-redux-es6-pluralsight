import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';
console.log('Generating minified bundle for production'.blue);

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors)
    return jsonStats.errors.map(err => console.log(err.red));

  if(jsonStats.hasWarnings){
    console.log('Webpack generated following warnings:'.bold.yellow);
    jsonStats.warnings.map(warn => console.log(warn.yellow));
  }

  console.log(`Webpack stats ${stats}`);

  console.log('Build succeeded, app written to /dist directory'.green);

  return 0;
});
