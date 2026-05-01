---
title: "``first``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/first.rst"
upstreamPath: "doc/filters/first.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``first``

The `first` filter returns the first "element" of a sequence, a mapping, or
a string:


```twig
{{ [1, 2, 3, 4]|first }}
{# outputs 1 #}

{{ {a: 1, b: 2, c: 3, d: 4}|first }}
{# outputs 1 #}

{{ '1234'|first }}
{# outputs 1 #}

```


> **It also works with objects implementing the [Traversable](https://www.php.net/manual/en/class.traversable.php) interface.**
>
>

::::::
