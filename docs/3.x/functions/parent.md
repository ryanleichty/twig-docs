---
title: "``parent``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/parent.rst"
upstreamPath: "doc/functions/parent.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``parent``

When a template uses inheritance, it's possible to render the contents of the
parent block when overriding a block by using the `parent` function:


```twig
{% extends "base.html.twig" %}

{% block sidebar %}
    <h3>Table Of Contents</h3>
    ...
    {{ parent() }}
{% endblock %}

```

The `parent()` call will return the content of the `sidebar` block as
defined in the `base.html.twig` template.


> **Note**
>

::::::
