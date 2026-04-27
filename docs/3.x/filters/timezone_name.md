---
title: "``timezone_name``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/timezone_name.rst"
upstreamPath: "doc/filters/timezone_name.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``timezone_name``

The `timezone_name` filter returns the timezone name given its ISO 8601 timezone identifier:


```twig
{# Central European Time (Paris) #}
{{ 'Europe/Paris'|timezone_name }}

{# Pacific Time (Los Angeles) #}
{{ 'America/Los_Angeles'|timezone_name }}

```

By default, the filter uses the current locale. You can pass it explicitly:


```twig
{# heure du Pacifique nord-américain (Los Angeles) #}
{{ 'America/Los_Angeles'|timezone_name('fr') }}

```


> **The `timezone_name` filter is part of the `IntlExtension` which is not**
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
