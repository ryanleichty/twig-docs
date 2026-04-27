---
title: "``slug``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/slug.rst"
upstreamPath: "doc/filters/slug.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``slug``

The `slug` filter transforms a given string into another string that
only includes safe ASCII characters.

Here is an example:


```twig
{{ 'Wôrķšƥáçè ~~sèťtïñğš~~'|slug }}
Workspace-settings

```

The default separator between words is a dash (`-`), but you can
define a separator of your choice by passing it as an argument:


```twig
{{ 'Wôrķšƥáçè ~~sèťtïñğš~~'|slug('/') }}
Workspace/settings

```

The slugger automatically detects the language of the original
string, but you can also specify it explicitly using the second
argument:


```twig
{{ '...'|slug('-', 'ko') }}

```

The `slug` filter uses the method by the same name in Symfony's
[AsciiSlugger](https://symfony.com/doc/current/components/string.html#slugger).


> **The `slug` filter is part of the `StringExtension` which is not**
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

* `separator`: The separator that is used to join words (defaults to `-`)
* `locale`: The locale code of the original string as defined in [RFC 5646](https://www.rfc-editor.org/info/rfc5646)

::::::
