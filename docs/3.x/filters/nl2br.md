---
title: "``nl2br``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/nl2br.rst"
upstreamPath: "doc/filters/nl2br.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``nl2br``

The `nl2br` filter inserts HTML line breaks before all newlines in a string:


```twig
{{ "I like Twig.\nYou will like it too."|nl2br }}
{# outputs

    I like Twig.<br />
    You will like it too.

#}

```


> **The `nl2br` filter pre-escapes the input before applying the**
>
> transformation.
>

::::::
