---
title: "``json_encode``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/json_encode.rst"
upstreamPath: "doc/filters/json_encode.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``json_encode``

The `json_encode` filter returns the JSON representation of a value:


```twig
{{ data|json_encode() }}

```


> **Internally, Twig uses the PHP `json_encode`_ function.**
>
>

## Arguments

* `options`: A bitmask of `json_encode options`_: ``&#123;&#123;
  data|json_encode(constant('JSON_PRETTY_PRINT')) &#125;&#125;``.
  Combine constants using `bitwise operators`:
  `&#123;&#123; data|json_encode(constant('JSON_PRETTY_PRINT') b-or constant('JSON_HEX_QUOT')) &#125;&#125;`

::::::
