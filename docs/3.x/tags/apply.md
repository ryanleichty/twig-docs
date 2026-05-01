---
title: "``apply``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/apply.rst"
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
