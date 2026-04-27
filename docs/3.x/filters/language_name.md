---
title: "``language_name``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/language_name.rst"
upstreamPath: "doc/filters/language_name.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``language_name``

The `language_name` filter returns the language name based on its ISO 639-1
code, ISO 639-2 code, or other specific localized code:


```twig
{# German #}
{{ 'de'|language_name }}

```

By default, the filter uses the current locale. You can pass it explicitly:


```twig
{# allemand #}
{{ 'de'|language_name('fr') }}

{# français canadien #}
{{ 'fr_CA'|language_name('fr_FR') }}

```


> **The `language_name` filter is part of the `IntlExtension` which is not**
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
