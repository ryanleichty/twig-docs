---
title: "``constant``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/constant.rst"
upstreamPath: "doc/functions/constant.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``constant``

`constant` returns the constant value for a given string:


```twig
{{ some_date|date(constant('DATE_W3C')) }}
{{ constant('Namespace\\Classname::CONSTANT_NAME') }}

```

You can read constants from object instances as well:


```twig
{{ constant('RSS', date) }}

```

Retrieve the fully qualified class name of an object:


```twig
{{ constant('class', date) }}

```

Use the `defined` test to check if a constant is defined:


```twig
{% if constant('SOME_CONST') is defined %}
    ...
{% endif %}

```

::::::
