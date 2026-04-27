---
title: "``constant``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/constant.rst"
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
