(this["webpackJsonpltfgraphql"] = this["webpackJsonpltfgraphql"] || []).push([["main"],{

/***/ "./src/app/app.tsx":
/*!*************************!*\
  !*** ./src/app/app.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/app/main.tsx");
var _jsxFileName = "/Users/shrijantripathi/projects/startup/ltf/ltf-blog/wp-content/themes/ltfgraphql/react-src/src/app/app.tsx";





const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
  uri: "http://localhost:8000/graphql"
});

const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: client,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app/main.tsx":
/*!**************************!*\
  !*** ./src/app/main.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
var _jsxFileName = "/Users/shrijantripathi/projects/startup/ltf/ltf-blog/wp-content/themes/ltfgraphql/react-src/src/app/main.tsx";




const Main = () => {
  const {
    data,
    error,
    loading
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useGet_PostsQuery"])();

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }
    }, "Loading...");
  }

  if (error || !data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    }, "ERROR");
  }

  console.log("_____________data__________", data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }, "Data is available");
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: TermObjectsConnectionOrderbyEnum, PostObjectsConnectionDateColumnEnum, RelationEnum, MimeTypeEnum, PostObjectsConnectionOrderbyEnum, OrderEnum, PostStatusEnum, AvatarRatingEnum, ContentTypeEnum, CommentsConnectionOrderbyEnum, PostObjectFieldFormatEnum, MediaItemSizeEnum, TaxonomyEnum, CategoryIdType, ContentNodeIdTypeEnum, ContentTypeIdTypeEnum, MediaItemIdType, MenuNodeIdTypeEnum, MenuLocationEnum, MenuItemNodeIdTypeEnum, PageIdType, PostIdType, PostFormatIdType, TagIdType, TaxonomyIdTypeEnum, TermNodeIdTypeEnum, UserNodeIdTypeEnum, UsersConnectionOrderbyEnum, UserRoleEnum, MediaItemStatusEnum, Get_PostsDocument, Get_PostsComponent, withGet_Posts, useGet_PostsQuery, useGet_PostsLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermObjectsConnectionOrderbyEnum", function() { return TermObjectsConnectionOrderbyEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostObjectsConnectionDateColumnEnum", function() { return PostObjectsConnectionDateColumnEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationEnum", function() { return RelationEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeTypeEnum", function() { return MimeTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostObjectsConnectionOrderbyEnum", function() { return PostObjectsConnectionOrderbyEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEnum", function() { return OrderEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStatusEnum", function() { return PostStatusEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarRatingEnum", function() { return AvatarRatingEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeEnum", function() { return ContentTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsConnectionOrderbyEnum", function() { return CommentsConnectionOrderbyEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostObjectFieldFormatEnum", function() { return PostObjectFieldFormatEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemSizeEnum", function() { return MediaItemSizeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyEnum", function() { return TaxonomyEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIdType", function() { return CategoryIdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentNodeIdTypeEnum", function() { return ContentNodeIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeIdTypeEnum", function() { return ContentTypeIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemIdType", function() { return MediaItemIdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNodeIdTypeEnum", function() { return MenuNodeIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLocationEnum", function() { return MenuLocationEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemNodeIdTypeEnum", function() { return MenuItemNodeIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIdType", function() { return PageIdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostIdType", function() { return PostIdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormatIdType", function() { return PostFormatIdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagIdType", function() { return TagIdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyIdTypeEnum", function() { return TaxonomyIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermNodeIdTypeEnum", function() { return TermNodeIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNodeIdTypeEnum", function() { return UserNodeIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersConnectionOrderbyEnum", function() { return UsersConnectionOrderbyEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleEnum", function() { return UserRoleEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemStatusEnum", function() { return MediaItemStatusEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get_PostsDocument", function() { return Get_PostsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get_PostsComponent", function() { return Get_PostsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGet_Posts", function() { return withGet_Posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGet_PostsQuery", function() { return useGet_PostsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGet_PostsLazyQuery", function() { return useGet_PostsLazyQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-components */ "./node_modules/@apollo/react-components/lib/react-components.esm.js");
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hoc */ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
var _jsxFileName = "/Users/shrijantripathi/projects/startup/ltf/ltf-blog/wp-content/themes/ltfgraphql/react-src/src/generated/graphql.tsx";






/** Options for ordering the connection by */
let TermObjectsConnectionOrderbyEnum;
/** Connection between the RootQuery type and the category type */

(function (TermObjectsConnectionOrderbyEnum) {
  TermObjectsConnectionOrderbyEnum["Count"] = "COUNT";
  TermObjectsConnectionOrderbyEnum["Description"] = "DESCRIPTION";
  TermObjectsConnectionOrderbyEnum["Name"] = "NAME";
  TermObjectsConnectionOrderbyEnum["Slug"] = "SLUG";
  TermObjectsConnectionOrderbyEnum["TermGroup"] = "TERM_GROUP";
  TermObjectsConnectionOrderbyEnum["TermId"] = "TERM_ID";
  TermObjectsConnectionOrderbyEnum["TermOrder"] = "TERM_ORDER";
})(TermObjectsConnectionOrderbyEnum || (TermObjectsConnectionOrderbyEnum = {}));

/** The column to use when filtering by date */
let PostObjectsConnectionDateColumnEnum;
/** The logical relation between each item in the array when there are more than one. */

(function (PostObjectsConnectionDateColumnEnum) {
  PostObjectsConnectionDateColumnEnum["Date"] = "DATE";
  PostObjectsConnectionDateColumnEnum["Modified"] = "MODIFIED";
})(PostObjectsConnectionDateColumnEnum || (PostObjectsConnectionDateColumnEnum = {}));

let RelationEnum;
/** The MimeType of the object */

(function (RelationEnum) {
  RelationEnum["And"] = "AND";
  RelationEnum["Or"] = "OR";
})(RelationEnum || (RelationEnum = {}));

let MimeTypeEnum;
/** Options for ordering the connection */

(function (MimeTypeEnum) {
  MimeTypeEnum["ApplicationJava"] = "APPLICATION_JAVA";
  MimeTypeEnum["ApplicationMsword"] = "APPLICATION_MSWORD";
  MimeTypeEnum["ApplicationOctetStream"] = "APPLICATION_OCTET_STREAM";
  MimeTypeEnum["ApplicationOnenote"] = "APPLICATION_ONENOTE";
  MimeTypeEnum["ApplicationOxps"] = "APPLICATION_OXPS";
  MimeTypeEnum["ApplicationPdf"] = "APPLICATION_PDF";
  MimeTypeEnum["ApplicationRar"] = "APPLICATION_RAR";
  MimeTypeEnum["ApplicationRtf"] = "APPLICATION_RTF";
  MimeTypeEnum["ApplicationTtafXml"] = "APPLICATION_TTAF_XML";
  MimeTypeEnum["ApplicationVndAppleKeynote"] = "APPLICATION_VND_APPLE_KEYNOTE";
  MimeTypeEnum["ApplicationVndAppleNumbers"] = "APPLICATION_VND_APPLE_NUMBERS";
  MimeTypeEnum["ApplicationVndApplePages"] = "APPLICATION_VND_APPLE_PAGES";
  MimeTypeEnum["ApplicationVndMsAccess"] = "APPLICATION_VND_MS_ACCESS";
  MimeTypeEnum["ApplicationVndMsExcel"] = "APPLICATION_VND_MS_EXCEL";
  MimeTypeEnum["ApplicationVndMsExcelAddinMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsExcelSheetBinaryMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsExcelSheetMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsExcelTemplateMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsPowerpoint"] = "APPLICATION_VND_MS_POWERPOINT";
  MimeTypeEnum["ApplicationVndMsPowerpointAddinMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsPowerpointPresentationMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsPowerpointSlideshowMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsPowerpointSlideMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsPowerpointTemplateMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsProject"] = "APPLICATION_VND_MS_PROJECT";
  MimeTypeEnum["ApplicationVndMsWordDocumentMacroenabled_12"] = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsWordTemplateMacroenabled_12"] = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";
  MimeTypeEnum["ApplicationVndMsWrite"] = "APPLICATION_VND_MS_WRITE";
  MimeTypeEnum["ApplicationVndMsXpsdocument"] = "APPLICATION_VND_MS_XPSDOCUMENT";
  MimeTypeEnum["ApplicationVndOasisOpendocumentChart"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";
  MimeTypeEnum["ApplicationVndOasisOpendocumentDatabase"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";
  MimeTypeEnum["ApplicationVndOasisOpendocumentFormula"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";
  MimeTypeEnum["ApplicationVndOasisOpendocumentGraphics"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";
  MimeTypeEnum["ApplicationVndOasisOpendocumentPresentation"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";
  MimeTypeEnum["ApplicationVndOasisOpendocumentSpreadsheet"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";
  MimeTypeEnum["ApplicationVndOasisOpendocumentText"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";
  MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";
  MimeTypeEnum["ApplicationWordperfect"] = "APPLICATION_WORDPERFECT";
  MimeTypeEnum["ApplicationX_7ZCompressed"] = "APPLICATION_X_7Z_COMPRESSED";
  MimeTypeEnum["ApplicationXGzip"] = "APPLICATION_X_GZIP";
  MimeTypeEnum["ApplicationXTar"] = "APPLICATION_X_TAR";
  MimeTypeEnum["ApplicationZip"] = "APPLICATION_ZIP";
  MimeTypeEnum["AudioAac"] = "AUDIO_AAC";
  MimeTypeEnum["AudioFlac"] = "AUDIO_FLAC";
  MimeTypeEnum["AudioMidi"] = "AUDIO_MIDI";
  MimeTypeEnum["AudioMpeg"] = "AUDIO_MPEG";
  MimeTypeEnum["AudioOgg"] = "AUDIO_OGG";
  MimeTypeEnum["AudioWav"] = "AUDIO_WAV";
  MimeTypeEnum["AudioXMatroska"] = "AUDIO_X_MATROSKA";
  MimeTypeEnum["AudioXMsWax"] = "AUDIO_X_MS_WAX";
  MimeTypeEnum["AudioXMsWma"] = "AUDIO_X_MS_WMA";
  MimeTypeEnum["AudioXRealaudio"] = "AUDIO_X_REALAUDIO";
  MimeTypeEnum["ImageBmp"] = "IMAGE_BMP";
  MimeTypeEnum["ImageGif"] = "IMAGE_GIF";
  MimeTypeEnum["ImageJpeg"] = "IMAGE_JPEG";
  MimeTypeEnum["ImagePng"] = "IMAGE_PNG";
  MimeTypeEnum["ImageTiff"] = "IMAGE_TIFF";
  MimeTypeEnum["ImageXIcon"] = "IMAGE_X_ICON";
  MimeTypeEnum["TextCalendar"] = "TEXT_CALENDAR";
  MimeTypeEnum["TextCss"] = "TEXT_CSS";
  MimeTypeEnum["TextCsv"] = "TEXT_CSV";
  MimeTypeEnum["TextPlain"] = "TEXT_PLAIN";
  MimeTypeEnum["TextRichtext"] = "TEXT_RICHTEXT";
  MimeTypeEnum["TextTabSeparatedValues"] = "TEXT_TAB_SEPARATED_VALUES";
  MimeTypeEnum["TextVtt"] = "TEXT_VTT";
  MimeTypeEnum["Video_3Gpp"] = "VIDEO_3GPP";
  MimeTypeEnum["Video_3Gpp2"] = "VIDEO_3GPP2";
  MimeTypeEnum["VideoAvi"] = "VIDEO_AVI";
  MimeTypeEnum["VideoDivx"] = "VIDEO_DIVX";
  MimeTypeEnum["VideoMp4"] = "VIDEO_MP4";
  MimeTypeEnum["VideoMpeg"] = "VIDEO_MPEG";
  MimeTypeEnum["VideoOgg"] = "VIDEO_OGG";
  MimeTypeEnum["VideoQuicktime"] = "VIDEO_QUICKTIME";
  MimeTypeEnum["VideoWebm"] = "VIDEO_WEBM";
  MimeTypeEnum["VideoXFlv"] = "VIDEO_X_FLV";
  MimeTypeEnum["VideoXMatroska"] = "VIDEO_X_MATROSKA";
  MimeTypeEnum["VideoXMsAsf"] = "VIDEO_X_MS_ASF";
  MimeTypeEnum["VideoXMsWm"] = "VIDEO_X_MS_WM";
  MimeTypeEnum["VideoXMsWmv"] = "VIDEO_X_MS_WMV";
  MimeTypeEnum["VideoXMsWmx"] = "VIDEO_X_MS_WMX";
})(MimeTypeEnum || (MimeTypeEnum = {}));

/** Field to order the connection by */
let PostObjectsConnectionOrderbyEnum;
/** The cardinality of the connection order */

(function (PostObjectsConnectionOrderbyEnum) {
  PostObjectsConnectionOrderbyEnum["Author"] = "AUTHOR";
  PostObjectsConnectionOrderbyEnum["CommentCount"] = "COMMENT_COUNT";
  PostObjectsConnectionOrderbyEnum["Date"] = "DATE";
  PostObjectsConnectionOrderbyEnum["In"] = "IN";
  PostObjectsConnectionOrderbyEnum["MenuOrder"] = "MENU_ORDER";
  PostObjectsConnectionOrderbyEnum["Modified"] = "MODIFIED";
  PostObjectsConnectionOrderbyEnum["NameIn"] = "NAME_IN";
  PostObjectsConnectionOrderbyEnum["Parent"] = "PARENT";
  PostObjectsConnectionOrderbyEnum["Slug"] = "SLUG";
  PostObjectsConnectionOrderbyEnum["Title"] = "TITLE";
})(PostObjectsConnectionOrderbyEnum || (PostObjectsConnectionOrderbyEnum = {}));

let OrderEnum;
/** The status of the object. */

(function (OrderEnum) {
  OrderEnum["Asc"] = "ASC";
  OrderEnum["Desc"] = "DESC";
})(OrderEnum || (OrderEnum = {}));

let PostStatusEnum;
/** Connection between the category type and the post type */

(function (PostStatusEnum) {
  PostStatusEnum["AutoDraft"] = "AUTO_DRAFT";
  PostStatusEnum["Draft"] = "DRAFT";
  PostStatusEnum["Failed"] = "FAILED";
  PostStatusEnum["Future"] = "FUTURE";
  PostStatusEnum["Inherit"] = "INHERIT";
  PostStatusEnum["InProgress"] = "IN_PROGRESS";
  PostStatusEnum["Pending"] = "PENDING";
  PostStatusEnum["Private"] = "PRIVATE";
  PostStatusEnum["Publish"] = "PUBLISH";
  PostStatusEnum["RequestCompleted"] = "REQUEST_COMPLETED";
  PostStatusEnum["RequestConfirmed"] = "REQUEST_CONFIRMED";
  PostStatusEnum["RequestFailed"] = "REQUEST_FAILED";
  PostStatusEnum["RequestPending"] = "REQUEST_PENDING";
  PostStatusEnum["Trash"] = "TRASH";
})(PostStatusEnum || (PostStatusEnum = {}));

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
let AvatarRatingEnum;
/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */

(function (AvatarRatingEnum) {
  AvatarRatingEnum["G"] = "G";
  AvatarRatingEnum["Pg"] = "PG";
  AvatarRatingEnum["R"] = "R";
  AvatarRatingEnum["X"] = "X";
})(AvatarRatingEnum || (AvatarRatingEnum = {}));

/** Allowed Content Types */
let ContentTypeEnum;
/** Options for ordering the connection */

(function (ContentTypeEnum) {
  ContentTypeEnum["Attachment"] = "ATTACHMENT";
  ContentTypeEnum["Page"] = "PAGE";
  ContentTypeEnum["Post"] = "POST";
})(ContentTypeEnum || (ContentTypeEnum = {}));

let CommentsConnectionOrderbyEnum;
/** Connection between the User type and the Comment type */

(function (CommentsConnectionOrderbyEnum) {
  CommentsConnectionOrderbyEnum["CommentAgent"] = "COMMENT_AGENT";
  CommentsConnectionOrderbyEnum["CommentApproved"] = "COMMENT_APPROVED";
  CommentsConnectionOrderbyEnum["CommentAuthor"] = "COMMENT_AUTHOR";
  CommentsConnectionOrderbyEnum["CommentAuthorEmail"] = "COMMENT_AUTHOR_EMAIL";
  CommentsConnectionOrderbyEnum["CommentAuthorIp"] = "COMMENT_AUTHOR_IP";
  CommentsConnectionOrderbyEnum["CommentAuthorUrl"] = "COMMENT_AUTHOR_URL";
  CommentsConnectionOrderbyEnum["CommentContent"] = "COMMENT_CONTENT";
  CommentsConnectionOrderbyEnum["CommentDate"] = "COMMENT_DATE";
  CommentsConnectionOrderbyEnum["CommentDateGmt"] = "COMMENT_DATE_GMT";
  CommentsConnectionOrderbyEnum["CommentId"] = "COMMENT_ID";
  CommentsConnectionOrderbyEnum["CommentIn"] = "COMMENT_IN";
  CommentsConnectionOrderbyEnum["CommentKarma"] = "COMMENT_KARMA";
  CommentsConnectionOrderbyEnum["CommentParent"] = "COMMENT_PARENT";
  CommentsConnectionOrderbyEnum["CommentPostId"] = "COMMENT_POST_ID";
  CommentsConnectionOrderbyEnum["CommentType"] = "COMMENT_TYPE";
  CommentsConnectionOrderbyEnum["UserId"] = "USER_ID";
})(CommentsConnectionOrderbyEnum || (CommentsConnectionOrderbyEnum = {}));

/** The format of post field data. */
let PostObjectFieldFormatEnum;
/** Arguments for filtering the CommentToParentCommentConnection connection */

(function (PostObjectFieldFormatEnum) {
  PostObjectFieldFormatEnum["Raw"] = "RAW";
  PostObjectFieldFormatEnum["Rendered"] = "RENDERED";
})(PostObjectFieldFormatEnum || (PostObjectFieldFormatEnum = {}));

/** The size of the media item object. */
let MediaItemSizeEnum;
/** Arguments for filtering the ContentNodeToTermNodeConnection connection */

(function (MediaItemSizeEnum) {
  MediaItemSizeEnum["Large"] = "LARGE";
  MediaItemSizeEnum["Medium"] = "MEDIUM";
  MediaItemSizeEnum["MediumLarge"] = "MEDIUM_LARGE";
  MediaItemSizeEnum["Thumbnail"] = "THUMBNAIL";
  MediaItemSizeEnum["1536X1536"] = "_1536X1536";
  MediaItemSizeEnum["2048X2048"] = "_2048X2048";
})(MediaItemSizeEnum || (MediaItemSizeEnum = {}));

/** Allowed taxonomies */
let TaxonomyEnum;
/** Connection between the ContentNode type and the TermNode type */

(function (TaxonomyEnum) {
  TaxonomyEnum["Category"] = "CATEGORY";
  TaxonomyEnum["Postformat"] = "POSTFORMAT";
  TaxonomyEnum["Tag"] = "TAG";
})(TaxonomyEnum || (TaxonomyEnum = {}));

/** The Type of Identifier used to fetch a single resource. Default is ID. */
let CategoryIdType;
/** Arguments for filtering the RootQueryToCommentConnection connection */

(function (CategoryIdType) {
  CategoryIdType["DatabaseId"] = "DATABASE_ID";
  CategoryIdType["Id"] = "ID";
  CategoryIdType["Name"] = "NAME";
  CategoryIdType["Slug"] = "SLUG";
  CategoryIdType["Uri"] = "URI";
})(CategoryIdType || (CategoryIdType = {}));

/** The Type of Identifier used to fetch a single resource. Default is ID. */
let ContentNodeIdTypeEnum;
/** Arguments for filtering the RootQueryToContentNodeConnection connection */

(function (ContentNodeIdTypeEnum) {
  ContentNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
  ContentNodeIdTypeEnum["Id"] = "ID";
  ContentNodeIdTypeEnum["Uri"] = "URI";
})(ContentNodeIdTypeEnum || (ContentNodeIdTypeEnum = {}));

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
let ContentTypeIdTypeEnum;
/** Connection between the RootQuery type and the ContentType type */

(function (ContentTypeIdTypeEnum) {
  ContentTypeIdTypeEnum["Id"] = "ID";
  ContentTypeIdTypeEnum["Name"] = "NAME";
})(ContentTypeIdTypeEnum || (ContentTypeIdTypeEnum = {}));

/** The Type of Identifier used to fetch a single resource. Default is ID. */
let MediaItemIdType;
/** Arguments for filtering the RootQueryToMediaItemConnection connection */

(function (MediaItemIdType) {
  MediaItemIdType["DatabaseId"] = "DATABASE_ID";
  MediaItemIdType["Id"] = "ID";
  MediaItemIdType["Uri"] = "URI";
  MediaItemIdType["Slug"] = "SLUG";
  MediaItemIdType["SourceUrl"] = "SOURCE_URL";
})(MediaItemIdType || (MediaItemIdType = {}));

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
let MenuNodeIdTypeEnum;
/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */

(function (MenuNodeIdTypeEnum) {
  MenuNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
  MenuNodeIdTypeEnum["Id"] = "ID";
  MenuNodeIdTypeEnum["Name"] = "NAME";
})(MenuNodeIdTypeEnum || (MenuNodeIdTypeEnum = {}));

/** Registered menu locations */
let MenuLocationEnum;
/** Arguments for filtering the MenuToMenuItemConnection connection */

(function (MenuLocationEnum) {
  MenuLocationEnum["Empty"] = "EMPTY";
})(MenuLocationEnum || (MenuLocationEnum = {}));

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
let MenuItemNodeIdTypeEnum;
/** Arguments for filtering the RootQueryToMenuItemConnection connection */

(function (MenuItemNodeIdTypeEnum) {
  MenuItemNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
  MenuItemNodeIdTypeEnum["Id"] = "ID";
})(MenuItemNodeIdTypeEnum || (MenuItemNodeIdTypeEnum = {}));

/** The Type of Identifier used to fetch a single resource. Default is ID. */
let PageIdType;
/** Arguments for filtering the RootQueryToPageConnection connection */

(function (PageIdType) {
  PageIdType["DatabaseId"] = "DATABASE_ID";
  PageIdType["Id"] = "ID";
  PageIdType["Uri"] = "URI";
})(PageIdType || (PageIdType = {}));

/** The Type of Identifier used to fetch a single resource. Default is ID. */
let PostIdType;
/** The Type of Identifier used to fetch a single resource. Default is ID. */

(function (PostIdType) {
  PostIdType["DatabaseId"] = "DATABASE_ID";
  PostIdType["Id"] = "ID";
  PostIdType["Uri"] = "URI";
  PostIdType["Slug"] = "SLUG";
})(PostIdType || (PostIdType = {}));

let PostFormatIdType;
/** Arguments for filtering the RootQueryToPostFormatConnection connection */

(function (PostFormatIdType) {
  PostFormatIdType["DatabaseId"] = "DATABASE_ID";
  PostFormatIdType["Id"] = "ID";
  PostFormatIdType["Name"] = "NAME";
  PostFormatIdType["Slug"] = "SLUG";
  PostFormatIdType["Uri"] = "URI";
})(PostFormatIdType || (PostFormatIdType = {}));

/** The Type of Identifier used to fetch a single resource. Default is ID. */
let TagIdType;
/** Arguments for filtering the RootQueryToTagConnection connection */

(function (TagIdType) {
  TagIdType["DatabaseId"] = "DATABASE_ID";
  TagIdType["Id"] = "ID";
  TagIdType["Name"] = "NAME";
  TagIdType["Slug"] = "SLUG";
  TagIdType["Uri"] = "URI";
})(TagIdType || (TagIdType = {}));

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
let TaxonomyIdTypeEnum;
/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */

(function (TaxonomyIdTypeEnum) {
  TaxonomyIdTypeEnum["Id"] = "ID";
  TaxonomyIdTypeEnum["Name"] = "NAME";
})(TaxonomyIdTypeEnum || (TaxonomyIdTypeEnum = {}));

let TermNodeIdTypeEnum;
/** Arguments for filtering the RootQueryToTermNodeConnection connection */

(function (TermNodeIdTypeEnum) {
  TermNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
  TermNodeIdTypeEnum["Id"] = "ID";
  TermNodeIdTypeEnum["Name"] = "NAME";
  TermNodeIdTypeEnum["Slug"] = "SLUG";
  TermNodeIdTypeEnum["Uri"] = "URI";
})(TermNodeIdTypeEnum || (TermNodeIdTypeEnum = {}));

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
let UserNodeIdTypeEnum;
/** Connection between the RootQuery type and the UserRole type */

(function (UserNodeIdTypeEnum) {
  UserNodeIdTypeEnum["DatabaseId"] = "DATABASE_ID";
  UserNodeIdTypeEnum["Email"] = "EMAIL";
  UserNodeIdTypeEnum["Id"] = "ID";
  UserNodeIdTypeEnum["Slug"] = "SLUG";
  UserNodeIdTypeEnum["Uri"] = "URI";
  UserNodeIdTypeEnum["Username"] = "USERNAME";
})(UserNodeIdTypeEnum || (UserNodeIdTypeEnum = {}));

/** Field to order the connection by */
let UsersConnectionOrderbyEnum;
/** Names of available user roles */

(function (UsersConnectionOrderbyEnum) {
  UsersConnectionOrderbyEnum["DisplayName"] = "DISPLAY_NAME";
  UsersConnectionOrderbyEnum["Email"] = "EMAIL";
  UsersConnectionOrderbyEnum["Login"] = "LOGIN";
  UsersConnectionOrderbyEnum["LoginIn"] = "LOGIN_IN";
  UsersConnectionOrderbyEnum["NiceName"] = "NICE_NAME";
  UsersConnectionOrderbyEnum["NiceNameIn"] = "NICE_NAME_IN";
  UsersConnectionOrderbyEnum["Registered"] = "REGISTERED";
  UsersConnectionOrderbyEnum["Url"] = "URL";
})(UsersConnectionOrderbyEnum || (UsersConnectionOrderbyEnum = {}));

let UserRoleEnum;
/** Connection between the RootQuery type and the User type */

(function (UserRoleEnum) {
  UserRoleEnum["Administrator"] = "ADMINISTRATOR";
  UserRoleEnum["Author"] = "AUTHOR";
  UserRoleEnum["Contributor"] = "CONTRIBUTOR";
  UserRoleEnum["Editor"] = "EDITOR";
  UserRoleEnum["Subscriber"] = "SUBSCRIBER";
})(UserRoleEnum || (UserRoleEnum = {}));

/** The status of the media item object. */
let MediaItemStatusEnum;
/** The payload for the createMediaItem mutation */

(function (MediaItemStatusEnum) {
  MediaItemStatusEnum["AutoDraft"] = "AUTO_DRAFT";
  MediaItemStatusEnum["Inherit"] = "INHERIT";
  MediaItemStatusEnum["Private"] = "PRIVATE";
  MediaItemStatusEnum["Trash"] = "TRASH";
})(MediaItemStatusEnum || (MediaItemStatusEnum = {}));

const Get_PostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GET_POSTS {
    posts {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
`;
const Get_PostsComponent = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__["Query"], Object.assign({
  query: Get_PostsDocument
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9363,
    columnNumber: 3
  }
}));
function withGet_Posts(operationOptions) {
  return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__["withQuery"](Get_PostsDocument, {
    alias: "getPosts",
    ...operationOptions
  });
}
/**
 * __useGet_PostsQuery__
 *
 * To run a query within a React component, call `useGet_PostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_PostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_PostsQuery({
 *   variables: {
 *   },
 * });
 */

function useGet_PostsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"](Get_PostsDocument, baseOptions);
}
function useGet_PostsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useLazyQuery"](Get_PostsDocument, baseOptions);
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app */ "./src/app/app.tsx");
var _jsxFileName = "/Users/shrijantripathi/projects/startup/ltf/ltf-blog/wp-content/themes/ltfgraphql/react-src/src/index.tsx";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shrijantripathi/projects/startup/ltf/ltf-blog/wp-content/themes/ltfgraphql/react-src/src/index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map