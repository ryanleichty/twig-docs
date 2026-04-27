---
title: "``deprecated``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tags/deprecated.rst"
upstreamPath: "doc/tags/deprecated.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``deprecated``

Twig generates a deprecation notice (via a call to the `trigger_error()`
PHP function) where the `deprecated` tag is used in a template:


```twig
{# base.html.twig #}
{% deprecated 'The "base.html.twig" template is deprecated, use "layout.html.twig" instead.' %}
{% extends 'layout.html.twig' %}

```

You can also deprecate a macro in the following way:


```twig
{% macro welcome(name) %}
    {% deprecated 'The "welcome" macro is deprecated, use "hello" instead.' %}

    ...
{% endmacro %}

```

Note that by default, the deprecation notices are silenced and never displayed nor logged.
See `deprecation-notices` to learn how to handle them.


> **Added in Twig 3.11**
>
> The `package` and `version` options were added in Twig 3.11.
>

You can optionally add the package and the version that introduced the deprecation:


```twig
{% deprecated 'The "base.html.twig" template is deprecated, use "layout.html.twig" instead.' package='twig/twig' %}
{% deprecated 'The "base.html.twig" template is deprecated, use "layout.html.twig" instead.' package='twig/twig' version='3.11' %}

```


> **Don't use the `deprecated` tag to deprecate a `block` as the**
>
> deprecation cannot always be triggered correctly.
>

::::::
