---
title: "``format_time``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/format_time.rst"
upstreamPath: "doc/filters/format_time.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``format_time``

The `format_time` filter formats a time. It behaves in the exact same way as
the [format_datetime](format_datetime) filter, but without the date.


> **The `format_time` filter is part of the `IntlExtension` which is not**
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
* `timeFormat`: The time format
* `pattern`: A date time pattern
* `timezone`: The date timezone
* `calendar`: The calendar ("gregorian" by default)

::::::
