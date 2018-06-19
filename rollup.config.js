export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-geo-info-angular.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ngx-geo-info-angular',
  globals: {
    '@angular/core': 'ng.core',
  }
}