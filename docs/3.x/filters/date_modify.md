---
title: "``date_modify``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/date_modify.rst"
upstreamPath: "doc/filters/date_modify.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``date_modify``

The `date_modify` filter modifies a date with a given modifier string:


```twig
{{ post.published_at|date_modify("+1 day")|date("m/d/Y") }}

```

The `date_modify` filter accepts strings (it must be in a format supported
by the [strtotime](https://www.php.net/strtotime) function) or [DateTime](https://www.php.net/DateTime) instances. You can combine
it with the [date](date) filter for formatting.

## Arguments

* `modifier`: The modifier

::::::
