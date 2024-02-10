# Frontend

Build Command ng build --configuration development --base-href=/tests/webproject/


Muss in Index rein
```html
    <style>
      [data-thq="thq-dropdown"] [data-thq="thq-dropdown-list"] {
        display: none;
      }

      [data-thq="thq-dropdown"] [data-thq="thq-dropdown-list"].show {
        display: flex;
      }

      [data-thq="thq-dropdown"] [data-thq="thq-dropdown-arrow"] {
        transition: transform 0.3s ease;
      }

      [data-thq="thq-dropdown"].open [data-thq="thq-dropdown-arrow"] {
        transform: rotate(90deg);
      }
    </style>
  </head>
  <body>
    <app-root></app-root>
    <script
      defer
      src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
    ></script>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var dropdowns = document.querySelectorAll('[data-thq="thq-dropdown"]');

        dropdowns.forEach(function (dropdown) {
          var dropdownList = dropdown.querySelector('[data-thq="thq-dropdown-list"]');

          dropdown.addEventListener("click", function () {
            console.log("Test");

            // Close all other open dropdowns
            dropdowns.forEach(function (otherDropdown) {
              if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("open");
                var otherDropDownList = otherDropdown.querySelector('[data-thq="thq-dropdown-list"]')
                if (otherDropDownList) {
                  otherDropDownList.classList.remove("show");
                }
                console.log(otherDropDownList)
              }
            });

            // Toggle the current dropdown
            dropdown.classList.toggle("open");
            dropdownList.classList.toggle("show");
          });
        });
      });

    </script>
```
