---
title: "``plural``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/plural.rst"
upstreamPath: "doc/filters/plural.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``plural``


> **Added in Twig 3.11**
>
> The `plural` filter was added in Twig 3.11.
>

The `plural` filter transforms a given noun in its singular form into its
plural version:


```twig
{# English (en) rules are used by default #}
{{ 'animal'|plural() }}
animals

{{ 'animal'|plural('fr') }}
animaux

```


> **The `plural` filter is part of the `StringExtension` which is not**
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

* `locale`: The locale of the original string (limited to languages supported by the from Symfony `inflector`_, part of the String component)
* `all`: Whether to return all possible plurals as an array, default is `false`


> **Internally, Twig uses the `pluralize`_ method from the Symfony String component.**
>
>

::::::
