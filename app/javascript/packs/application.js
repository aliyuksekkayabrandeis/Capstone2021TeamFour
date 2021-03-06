// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery3
//= require jquery_ujs
//= require_tree .
//= require popper
//= require bootstrap-sprockets
//= require datetime_picker_input
//= require bootstrap-modal
//= require turbolinks

//= require bootstrap
//= require notifications.js

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//= require popper.min

//= require moment
//= require bs4-datetime-picker

import "./app_helpers.js";
import "./opentok_video.js";
import "./opentok_screenshare.js";

import "./ajax_helpers.js";
import "./notifications.js";

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
