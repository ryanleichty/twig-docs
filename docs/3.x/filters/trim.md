---
title: "``trim``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/trim.rst"
upstreamPath: "doc/filters/trim.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``trim``

The `trim` filter strips whitespace (or other characters) from the beginning
and end of a string:


```twig
{{ '  I like Twig.  '|trim }}

{# outputs 'I like Twig.' #}

{{ '  I like Twig.'|trim('.') }}

{# outputs '  I like Twig' #}

{{ '  I like Twig.  '|trim(side: 'left') }}

{# outputs 'I like Twig.  ' #}

{{ '  I like Twig.  '|trim(' ', 'right') }}

{# outputs '  I like Twig.' #}

```


> **Internally, Twig uses the PHP [trim](https://www.php.net/trim), [ltrim](https://www.php.net/ltrim), and [rtrim](https://www.php.net/rtrim) functions.**
>
>

## Arguments

* `character_mask`: The characters to strip

* `side`: The default is to strip from the left and the right (`both`)
  sides, but `left` and `right` will strip from either the left side or
  right side only

::::::
