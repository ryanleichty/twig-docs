---
title: "``template_from_string``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/template_from_string.rst"
upstreamPath: "doc/functions/template_from_string.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``template_from_string``

The `template_from_string` function loads a template from a string:


```twig
{{ include(template_from_string("Hello {{ name }}")) }}
{{ include(template_from_string(page.template)) }}

```

To ease debugging, you can also give the template a name that will be part of
any related error message:


```twig
{{ include(template_from_string(page.template, "template for page " ~ page.name)) }}

```


> **The `template_from_string` function is not available by default.**
>
>
> On Symfony projects, you need to load it in your `services.yaml` file:
>
>
> ```yaml
> services:
>     Twig\Extension\StringLoaderExtension:
>
> ```
>
> or `services.php` file::
>
>     $services->set(\Twig\Extension\StringLoaderExtension::class);
>
> Otherwise, add the extension explicitly on the Twig environment::
>
>     use Twig\Extension\StringLoaderExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new StringLoaderExtension());
>


> **Even if you will probably always use the `template_from_string` function**
>
> with the `include` function, you can use it with any tag or function that
> takes a template as an argument (like the `embed` or `extends` tags).
>

## Arguments

* `template`: The template
* `name`: A name for the template

::::::
