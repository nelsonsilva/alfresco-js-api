/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/GenericFacetResponse', '../model/ResponseConsistency', '../model/ResultBuckets', '../model/ResultSetContextFacetQueries', '../model/ResultSetContextSpellcheck', '../model/SearchRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./GenericFacetResponse'), require('./ResponseConsistency'), require('./ResultBuckets'), require('./ResultSetContextFacetQueries'), require('./ResultSetContextSpellcheck'), require('./SearchRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.ResultSetContext = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.GenericFacetResponse, root.AlfrescoContentServicesRestApi.ResponseConsistency, root.AlfrescoContentServicesRestApi.ResultBuckets, root.AlfrescoContentServicesRestApi.ResultSetContextFacetQueries, root.AlfrescoContentServicesRestApi.ResultSetContextSpellcheck, root.AlfrescoContentServicesRestApi.SearchRequest);
  }
}(this, function(ApiClient, GenericFacetResponse, ResponseConsistency, ResultBuckets, ResultSetContextFacetQueries, ResultSetContextSpellcheck, SearchRequest) {
  'use strict';




  /**
   * The ResultSetContext model module.
   * @module model/ResultSetContext
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ResultSetContext</code>.
   * Context that applies to the whole result set
   * @alias module:model/ResultSetContext
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ResultSetContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultSetContext} obj Optional instance to populate.
   * @return {module:model/ResultSetContext} The populated <code>ResultSetContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('consistency')) {
        obj['consistency'] = ResponseConsistency.constructFromObject(data['consistency']);
      }
      if (data.hasOwnProperty('request')) {
        obj['request'] = SearchRequest.constructFromObject(data['request']);
      }
      if (data.hasOwnProperty('facetQueries')) {
        obj['facetQueries'] = ApiClient.convertToType(data['facetQueries'], [ResultSetContextFacetQueries]);
      }
      if (data.hasOwnProperty('facetsFields')) {
        obj['facetsFields'] = ApiClient.convertToType(data['facetsFields'], [ResultBuckets]);
      }
      if (data.hasOwnProperty('facets')) {
        obj['facets'] = ApiClient.convertToType(data['facets'], [GenericFacetResponse]);
      }
      if (data.hasOwnProperty('spellcheck')) {
        obj['spellcheck'] = ApiClient.convertToType(data['spellcheck'], [ResultSetContextSpellcheck]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ResponseConsistency} consistency
   */
  exports.prototype['consistency'] = undefined;
  /**
   * @member {module:model/SearchRequest} request
   */
  exports.prototype['request'] = undefined;
  /**
   * The counts from facet queries
   * @member {module:model/ResultSetContextFacetQueries[]} facetQueries
   */
  exports.prototype['facetQueries'] = undefined;
  /**
   * The counts from field facets
   * @member {module:model/ResultBuckets[]} facetsFields
   */
  exports.prototype['facetsFields'] = undefined;
  /**
   * The faceted response
   * @member {module:model/GenericFacetResponse[]} facets
   */
  exports.prototype['facets'] = undefined;
  /**
   * Suggested corrections  If zero results were found for the original query then a single entry of type \"searchInsteadFor\" will be returned. If alternatives were found that return more results than the original query they are returned as \"didYouMean\" options. The highest quality suggestion is first.
   * @member {module:model/ResultSetContextSpellcheck[]} spellcheck
   */
  exports.prototype['spellcheck'] = undefined;



  return exports;
}));

