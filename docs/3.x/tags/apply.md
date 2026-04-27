---
title: "``apply``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tags/apply.rst"
upstreamPath: "doc/tags/apply.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``apply``

The `apply` tag allows you to apply Twig filters on a block of template data:


```twig
{% apply upper %}
    This text becomes uppercase
{% endapply %}

```

You can also chain filters and pass arguments to them:


```twig
{% apply lower|escape('html') %}
    <strong>SOME TEXT</strong>
{% endapply %}

{# outputs "&lt;strong&gt;some text&lt;/strong&gt;" #}

```

::::::
