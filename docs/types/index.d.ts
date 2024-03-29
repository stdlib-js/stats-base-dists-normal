/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cdf = require( '@stdlib/stats-base-dists-normal-cdf' );
import Normal = require( '@stdlib/stats-base-dists-normal-ctor' );
import entropy = require( '@stdlib/stats-base-dists-normal-entropy' );
import kurtosis = require( '@stdlib/stats-base-dists-normal-kurtosis' );
import logcdf = require( '@stdlib/stats-base-dists-normal-logcdf' );
import logpdf = require( '@stdlib/stats-base-dists-normal-logpdf' );
import mean = require( '@stdlib/stats-base-dists-normal-mean' );
import median = require( '@stdlib/stats-base-dists-normal-median' );
import mgf = require( '@stdlib/stats-base-dists-normal-mgf' );
import mode = require( '@stdlib/stats-base-dists-normal-mode' );
import pdf = require( '@stdlib/stats-base-dists-normal-pdf' );
import quantile = require( '@stdlib/stats-base-dists-normal-quantile' );
import skewness = require( '@stdlib/stats-base-dists-normal-skewness' );
import stdev = require( '@stdlib/stats-base-dists-normal-stdev' );
import variance = require( '@stdlib/stats-base-dists-normal-variance' );

/**
* Interface describing the `normal` namespace.
*/
interface Namespace {
	/**
	* Normal distribution cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 2.0, 0.0, 1.0 );
	* // returns ~0.977
	*
	* var myCDF = ns.cdf.factory( 10.0, 2.0 );
	* y = myCDF( 10.0 );
	* // returns 0.5
	*/
	cdf: typeof cdf;

	/**
	* Normal distribution.
	*/
	Normal: typeof Normal;

	/**
	* Returns the differential entropy for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns entropy
	*
	* @example
	* var y = ns.entropy( 0.0, 1.0 );
	* // returns ~1.419
	*
	* @example
	* var y = ns.entropy( 5.0, 3.0 );
	* // returns ~2.518
	*
	* @example
	* var y = ns.entropy( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.entropy( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.entropy( 0.0, 0.0 );
	* // returns NaN
	*/
	entropy: typeof entropy;

	/**
	* Returns the excess kurtosis for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns excess kurtosis
	*
	* @example
	* var y = ns.kurtosis( 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.kurtosis( 5.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.kurtosis( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.kurtosis( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.kurtosis( 0.0, 0.0 );
	* // returns NaN
	*/
	kurtosis: typeof kurtosis;

	/**
	* Normal distribution natural logarithm of cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated logcdf
	*
	* @example
	* var y = ns.logcdf( 2.0, 0.0, 1.0 );
	* // returns ~-0.023
	*
	* var mylogcdf = ns.logcdf.factory( 10.0, 2.0 );
	* y = mylogcdf( 10.0 );
	* // returns ~-0.693
	*/
	logcdf: typeof logcdf;

	/**
	* Normal distribution natural logarithm of probability density function (logPDF).
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated logPDF
	*
	* @example
	* var y = ns.logpdf( 2.0, 0.0, 1.0 );
	* // returns ~-2.919
	*
	* var mylogpdf = ns.logpdf.factory( 10.0, 2.0 );
	* y = mylogpdf( 10.0 );
	* // returns ~-1.612
	*/
	logpdf: typeof logpdf;

	/**
	* Returns the expected value for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns expected value
	*
	* @example
	* var y = ns.mean( 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.mean( 5.0, 2.0 );
	* // returns 5.0
	*
	* @example
	* var y = ns.mean( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.mean( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.mean( 0.0, 0.0 );
	* // returns NaN
	*/
	mean: typeof mean;

	/**
	* Returns the median for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns median
	*
	* @example
	* var y = ns.median( 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.median( 5.0, 2.0 );
	* // returns 5.0
	*
	* @example
	* var y = ns.median( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.median( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.median( 0.0, 0.0 );
	* // returns NaN
	*/
	median: typeof median;

	/**
	* Normal distribution moment-generating function (MGF).
	*
	* @param t - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated MGF
	*
	* @example
	* var y = ns.mgf( 2.0, 0.0, 1.0 );
	* // returns ~7.389
	*
	* y = ns.mgf( 0.0, 0.0, 1.0 );
	* // returns 1.0
	*
	* y = ns.mgf( -1.0, 4.0, 2.0 );
	* // returns ~0.1353
	*
	* var mymgf = ns.mgf.factory( 4.0, 2.0 );
	*
	* y = mymgf( 1.0 );
	* // returns ~403.429
	*
	* y = mymgf( 0.5 );
	* // returns ~12.182
	*/
	mgf: typeof mgf;

	/**
	* Returns the mode for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns mode
	*
	* @example
	* var y = ns.mode( 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.mode( 5.0, 2.0 );
	* // returns 5.0
	*
	* @example
	* var y = ns.mode( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.mode( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.mode( 0.0, 0.0 );
	* // returns NaN
	*/
	mode: typeof mode;

	/**
	* Normal distribution probability density function (PDF).
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated PDF
	*
	* @example
	* var y = ns.pdf( 2.0, 0.0, 1.0 );
	* // returns ~0.054
	*
	* var myPDF = ns.pdf.factory( 10.0, 2.0 );
	* y = myPDF( 10.0 );
	* // returns ~0.199
	*/
	pdf: typeof pdf;

	/**
	* Normal distribution quantile function.
	*
	* @param p - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.8, 0.0, 1.0 );
	* // returns ~0.842
	*
	* var myQuantile = ns.quantile.factory( 10.0, 2.0 );
	* y = myQuantile( 0.5 );
	* // returns 10.0
	*/
	quantile: typeof quantile;

	/**
	* Returns the skewness for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns skewness
	*
	* @example
	* var y = ns.skewness( 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.skewness( 5.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.skewness( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.skewness( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.skewness( 0.0, 0.0 );
	* // returns NaN
	*/
	skewness: typeof skewness;

	/**
	* Returns the standard deviation for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns standard deviation
	*
	* @example
	* var y = ns.stdev( 0.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.stdev( 5.0, 3.0 );
	* // returns 3.0
	*
	* @example
	* var y = ns.stdev( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.stdev( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.stdev( 0.0, 0.0 );
	* // returns NaN
	*/
	stdev: typeof stdev;

	/**
	* Returns the variance for a normal distribution with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns variance
	*
	* @example
	* var y = ns.variance( 0.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.variance( 5.0, 3.0 );
	* // returns 9.0
	*
	* @example
	* var y = ns.variance( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.variance( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.variance( 0.0, 0.0 );
	* // returns NaN
	*/
	variance: typeof variance;
}

/**
* Normal distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
