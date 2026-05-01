---
title: "``singular``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/singular.rst"
upstreamPath: "doc/filters/singular.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``singular``


> **Added in Twig 3.11**
>
> The `singular` filter was added in Twig 3.11.
>

The `singular` filter transforms a given noun in its plural form into its
singular version:


```twig
{# English (en) rules are used by default #}
{{ 'partitions'|singular() }}
partition

{{ 'partitions'|singular('fr') }}
partition

```


> **The `singular` filter is part of the `StringExtension` which is not**
>
> installed by default. Install it first:
>
>
> ```bash
> $ composer require twig/string-extra
>
> ```
>
> Then, on Symfony projects, install the `twig/extra-bundle`:
>
>
> ```bash
> $ composer require twig/extra-bundle
>
> ```
>
> Otherwise, add the extension explicitly on the Twig environment::
>
>     use Twig\Extra\String\StringExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new StringExtension());
>

## Arguments

* `locale`: The locale of the original string (limited to languages supported by the from Symfony [inflector](https://symfony.com/doc/current/components/string.html#inflector), part of the String component)
* `all`: Whether to return all possible singulars as an array, default is `false`


> **Internally, Twig uses the [singularize](https://symfony.com/doc/current/components/string.html#inflector) method from the Symfony String component.**
>
>

::::::
