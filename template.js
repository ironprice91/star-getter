var template = "<div class='card card-custom'>\
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

var errorTemplate = '<div class="card error">\
                      <div class="card-content">\
                        <p class="title">\
                          Github unauthenticated API rate limit exceeded. Please check back in an hour.\
                        </p>\
                      </div>\
                    </div>';