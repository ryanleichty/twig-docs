---
title: "``currency_name``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/currency_name.rst"
upstreamPath: "doc/filters/currency_name.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``currency_name``

The `currency_name` filter returns the currency name given its ISO 4217 code:


```twig
{# Euro #}
{{ 'EUR'|currency_name }}

{# Japanese Yen #}
{{ 'JPY'|currency_name }}

```

By default, the filter uses the current locale. You can pass it explicitly:


```twig
{# yen japonais #}
{{ 'JPY'|currency_name('fr_FR') }}

```


> **The `currency_name` filter is part of the `IntlExtension` which is not**
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

* `locale`: The locale code as defined in [RFC 5646](https://www.rfc-editor.org/info/rfc5646)

::::::
