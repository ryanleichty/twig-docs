---
title: "``verbatim``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/verbatim.rst"
upstreamPath: "doc/tags/verbatim.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``verbatim``

The `verbatim` tag marks sections as being raw text that should not be
parsed. For example to put Twig syntax as example into a template you can use
this snippet:


```twig
{% verbatim %}
    <ul>
    {% for item in seq %}
        <li>{{ item }}</li>
    {% endfor %}
    </ul>
{% endverbatim %}

```

::::::
