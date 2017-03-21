var template = "<div class='card card-custom fadeInUp animated'>\
              <header class='card-header'>\
                <p class='card-header-title'><%= name %>\
                <% if (typeof description !== 'undefined' && description && description !== null) { %>\
                  - <%= description %></p>\
                <% } else { %>\
                    </p>\
                <% } %>\
              </header>\
              <div class='card-content'>\
                <div class='content'>\
                  <% if (typeof html_url !== 'undefined' && html_url && html_url !== null) { %><h1 class='is-large'><a target='_blank' href='<%= html_url %>'><%= html_url %></a></h1><% } %>\
                  <% if (typeof homepage !== 'undefined' && homepage && homepage !== null) { %><h1 class='is-large'><a target='_blank' href='<%= homepage %>'><%= homepage %></a></h1><% } %>\
                  <% if (typeof git_url !== 'undefined' && git_url && git_url !== null) { %>\
                    <div class='column'>\
                      <div class='field'>\
                        <p class='control'>\
                          <input value='<%= git_url %>' class='input is-large'/>\
                        </p>\
                      </div>\
                    </div>\
                  <% } %>\
                </div>\
              </div>\
            </div>";

var errorTemplate = '<div class="card error fadeInUp animated">\
                      <div class="card-content">\
                        <p class="title">\
                          Github unauthenticated API rate limit exceeded. Please check back in an hour.\
                        </p>\
                      </div>\
                    </div>';

var loadingTemplate = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="112" fill="white" class="loading-svg">\
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> \
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\
  </path>\
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">\
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\
  </path>\
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">\
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\
  </path>\
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">\
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\
  </path>\
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">\
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\
  </path>\
</svg>';
