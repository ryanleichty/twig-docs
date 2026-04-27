---
title: "``locale_name``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/locale_name.rst"
upstreamPath: "doc/filters/locale_name.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``locale_name``

The `locale_name` filter returns the locale name given its code:


```twig
{# German #}
{{ 'de'|locale_name }}

```

By default, the filter uses the current locale. You can pass it explicitly:


```twig
{# allemand #}
{{ 'de'|locale_name('fr') }}

{# français (Canada) #}
{{ 'fr_CA'|locale_name('fr_FR') }}

```


> **The `locale_name` filter is part of the `IntlExtension` which is not**
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
