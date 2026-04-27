---
title: "``country_name``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/country_name.rst"
upstreamPath: "doc/filters/country_name.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``country_name``

The `country_name` filter returns the country name given its ISO-3166 code:


```twig
{# France #}
{{ 'FR'|country_name }}

```

By default, the filter uses the current locale. You can pass it explicitly:


```twig
{# États-Unis #}
{{ 'US'|country_name('fr') }}

{# 美國 #}
{{ 'US'|country_name('zh_Hant_HK') }}

```


> **The `country_name` filter is part of the `IntlExtension` which is not**
>
> installed by default. Install it first:
>
>
> ```bash
> $ composer require twig/intl-extra
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
>     use Twig\Extra\Intl\IntlExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new IntlExtension());
>

## Arguments

* `locale`: The locale code as defined in `RFC 5646`_

::::::
