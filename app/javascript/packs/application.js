// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// LS - text below added from https://btihen.me/post_ruby_rails/rails_6_1_tailwind_2_0_alpinejs/

import Rails from "@rails/ujs"
// import "@hotwired/turbo-rails"		cannot resolve this one
import * as ActiveStorage from "@rails/activestorage"
import "channels"
// import tailwind into javascript
// import "../stylesheets/application.scss"
import "stylesheets/application";

// import alpinejs and its necessary rails adaptation
import 'alpine-turbo-drive-adapter'
require("alpinejs")


Rails.start()
ActiveStorage.start()

// import "controllers"		cannot resolve this one

// require("trix")			cannot resolve this one
// require("@rails/actiontext")    cannot resolve this one