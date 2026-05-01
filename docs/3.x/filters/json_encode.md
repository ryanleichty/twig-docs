---
title: "``json_encode``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/json_encode.rst"
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


> **Internally, Twig uses the PHP [json_encode](https://www.php.net/json_encode) function.**
>
>

## Arguments

* `options`: A bitmask of [json_encode options](https://www.php.net/manual/en/json.constants.php): ``&#123;&#123;
  data|json_encode(constant('JSON_PRETTY_PRINT')) &#125;&#125;``.
  Combine constants using `bitwise operators`:
  `&#123;&#123; data|json_encode(constant('JSON_PRETTY_PRINT') b-or constant('JSON_HEX_QUOT')) &#125;&#125;`

::::::
