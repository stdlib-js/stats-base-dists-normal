<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Normal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Normal distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-normal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var normal = require( '@stdlib/stats-base-dists-normal' );
```

#### normal

Normal distribution.

```javascript
var dist = normal;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/cdf]</span><span class="delimiter">: </span><span class="description">normal distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a normal distribution.</span>
-   <span class="signature">[`logpdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a normal distribution.</span>
-   <span class="signature">[`mgf( t, mu, sigma )`][@stdlib/stats/base/dists/normal/mgf]</span><span class="delimiter">: </span><span class="description">normal distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/pdf]</span><span class="delimiter">: </span><span class="description">normal distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, sigma )`][@stdlib/stats/base/dists/normal/quantile]</span><span class="delimiter">: </span><span class="description">normal distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, sigma )`][@stdlib/stats/base/dists/normal/entropy]</span><span class="delimiter">: </span><span class="description">normal distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, sigma )`][@stdlib/stats/base/dists/normal/kurtosis]</span><span class="delimiter">: </span><span class="description">normal distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, sigma )`][@stdlib/stats/base/dists/normal/mean]</span><span class="delimiter">: </span><span class="description">normal distribution expected value.</span>
-   <span class="signature">[`median( mu, sigma )`][@stdlib/stats/base/dists/normal/median]</span><span class="delimiter">: </span><span class="description">normal distribution median.</span>
-   <span class="signature">[`mode( mu, sigma )`][@stdlib/stats/base/dists/normal/mode]</span><span class="delimiter">: </span><span class="description">normal distribution mode.</span>
-   <span class="signature">[`skewness( mu, sigma )`][@stdlib/stats/base/dists/normal/skewness]</span><span class="delimiter">: </span><span class="description">normal distribution skewness.</span>
-   <span class="signature">[`stdev( mu, sigma )`][@stdlib/stats/base/dists/normal/stdev]</span><span class="delimiter">: </span><span class="description">normal distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, sigma )`][@stdlib/stats/base/dists/normal/variance]</span><span class="delimiter">: </span><span class="description">normal distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [normal][normal-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Normal( [mu, sigma] )`][@stdlib/stats/base/dists/normal/ctor]</span><span class="delimiter">: </span><span class="description">normal distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Normal = require( '@stdlib/stats-base-dists-normal' ).Normal;

var dist = new Normal( 2.0, 4.0 );

var y = dist.pdf( 2.0 );
// returns ~0.1
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var normal = require( '@stdlib/stats-base-dists-normal' );

console.log( objectKeys( normal ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-normal.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-normal

[test-image]: https://github.com/stdlib-js/stats-base-dists-normal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-normal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-normal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-normal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-normal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-normal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-normal/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-normal/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-normal/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-normal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-normal/main/LICENSE

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/normal/ctor]: https://github.com/stdlib-js/stats-base-dists-normal-ctor

[@stdlib/stats/base/dists/normal/entropy]: https://github.com/stdlib-js/stats-base-dists-normal-entropy

[@stdlib/stats/base/dists/normal/kurtosis]: https://github.com/stdlib-js/stats-base-dists-normal-kurtosis

[@stdlib/stats/base/dists/normal/mean]: https://github.com/stdlib-js/stats-base-dists-normal-mean

[@stdlib/stats/base/dists/normal/median]: https://github.com/stdlib-js/stats-base-dists-normal-median

[@stdlib/stats/base/dists/normal/mode]: https://github.com/stdlib-js/stats-base-dists-normal-mode

[@stdlib/stats/base/dists/normal/skewness]: https://github.com/stdlib-js/stats-base-dists-normal-skewness

[@stdlib/stats/base/dists/normal/stdev]: https://github.com/stdlib-js/stats-base-dists-normal-stdev

[@stdlib/stats/base/dists/normal/variance]: https://github.com/stdlib-js/stats-base-dists-normal-variance

[@stdlib/stats/base/dists/normal/cdf]: https://github.com/stdlib-js/stats-base-dists-normal-cdf

[@stdlib/stats/base/dists/normal/logcdf]: https://github.com/stdlib-js/stats-base-dists-normal-logcdf

[@stdlib/stats/base/dists/normal/logpdf]: https://github.com/stdlib-js/stats-base-dists-normal-logpdf

[@stdlib/stats/base/dists/normal/mgf]: https://github.com/stdlib-js/stats-base-dists-normal-mgf

[@stdlib/stats/base/dists/normal/pdf]: https://github.com/stdlib-js/stats-base-dists-normal-pdf

[@stdlib/stats/base/dists/normal/quantile]: https://github.com/stdlib-js/stats-base-dists-normal-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
