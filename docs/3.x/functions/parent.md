---
title: "``parent``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/parent.rst"
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
