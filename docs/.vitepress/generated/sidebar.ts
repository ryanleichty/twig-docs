import type { DefaultTheme } from 'vitepress';

export const twigSidebar = [
  {
    "text": "Introduction",
    "items": [
      {
        "text": "Getting Started",
        "link": "/3.x/"
      }
    ]
  },
  {
    "text": "Guides",
    "collapsed": false,
    "items": [
      {
        "text": "Extending Twig",
        "link": "/3.x/advanced"
      },
      {
        "text": "Twig for Developers",
        "link": "/3.x/api"
      },
      {
        "text": "Coding Standards",
        "link": "/3.x/coding_standards"
      },
      {
        "text": "Deprecated Features",
        "link": "/3.x/deprecated"
      },
      {
        "text": "Installation",
        "link": "/3.x/installation"
      },
      {
        "text": "Twig Internals",
        "link": "/3.x/internals"
      },
      {
        "text": "Introduction",
        "link": "/3.x/intro"
      },
      {
        "text": "Operators Precedence",
        "link": "/3.x/operators_precedence"
      },
      {
        "text": "Recipes",
        "link": "/3.x/recipes"
      },
      {
        "text": "Twig Sandbox",
        "link": "/3.x/sandbox"
      },
      {
        "text": "Twig for Template Designers",
        "link": "/3.x/templates"
      }
    ]
  },
  {
    "text": "Tags",
    "collapsed": true,
    "items": [
      {
        "text": "apply",
        "link": "/3.x/tags/apply"
      },
      {
        "text": "autoescape",
        "link": "/3.x/tags/autoescape"
      },
      {
        "text": "block",
        "link": "/3.x/tags/block"
      },
      {
        "text": "cache",
        "link": "/3.x/tags/cache"
      },
      {
        "text": "deprecated",
        "link": "/3.x/tags/deprecated"
      },
      {
        "text": "do",
        "link": "/3.x/tags/do"
      },
      {
        "text": "embed",
        "link": "/3.x/tags/embed"
      },
      {
        "text": "extends",
        "link": "/3.x/tags/extends"
      },
      {
        "text": "flush",
        "link": "/3.x/tags/flush"
      },
      {
        "text": "for",
        "link": "/3.x/tags/for"
      },
      {
        "text": "from",
        "link": "/3.x/tags/from"
      },
      {
        "text": "guard",
        "link": "/3.x/tags/guard"
      },
      {
        "text": "if",
        "link": "/3.x/tags/if"
      },
      {
        "text": "import",
        "link": "/3.x/tags/import"
      },
      {
        "text": "include",
        "link": "/3.x/tags/include"
      },
      {
        "text": "macro",
        "link": "/3.x/tags/macro"
      },
      {
        "text": "sandbox",
        "link": "/3.x/tags/sandbox"
      },
      {
        "text": "set",
        "link": "/3.x/tags/set"
      },
      {
        "text": "types",
        "link": "/3.x/tags/types"
      },
      {
        "text": "use",
        "link": "/3.x/tags/use"
      },
      {
        "text": "verbatim",
        "link": "/3.x/tags/verbatim"
      },
      {
        "text": "with",
        "link": "/3.x/tags/with"
      }
    ]
  },
  {
    "text": "Filters",
    "collapsed": true,
    "items": [
      {
        "text": "abs",
        "link": "/3.x/filters/abs"
      },
      {
        "text": "batch",
        "link": "/3.x/filters/batch"
      },
      {
        "text": "capitalize",
        "link": "/3.x/filters/capitalize"
      },
      {
        "text": "column",
        "link": "/3.x/filters/column"
      },
      {
        "text": "convert_encoding",
        "link": "/3.x/filters/convert_encoding"
      },
      {
        "text": "country_name",
        "link": "/3.x/filters/country_name"
      },
      {
        "text": "currency_name",
        "link": "/3.x/filters/currency_name"
      },
      {
        "text": "currency_symbol",
        "link": "/3.x/filters/currency_symbol"
      },
      {
        "text": "data_uri",
        "link": "/3.x/filters/data_uri"
      },
      {
        "text": "date_modify",
        "link": "/3.x/filters/date_modify"
      },
      {
        "text": "date",
        "link": "/3.x/filters/date"
      },
      {
        "text": "default",
        "link": "/3.x/filters/default"
      },
      {
        "text": "escape",
        "link": "/3.x/filters/escape"
      },
      {
        "text": "filter",
        "link": "/3.x/filters/filter"
      },
      {
        "text": "find",
        "link": "/3.x/filters/find"
      },
      {
        "text": "first",
        "link": "/3.x/filters/first"
      },
      {
        "text": "format_currency",
        "link": "/3.x/filters/format_currency"
      },
      {
        "text": "format_date",
        "link": "/3.x/filters/format_date"
      },
      {
        "text": "format_datetime",
        "link": "/3.x/filters/format_datetime"
      },
      {
        "text": "format_number",
        "link": "/3.x/filters/format_number"
      },
      {
        "text": "format_time",
        "link": "/3.x/filters/format_time"
      },
      {
        "text": "format",
        "link": "/3.x/filters/format"
      },
      {
        "text": "html_attr_merge",
        "link": "/3.x/filters/html_attr_merge"
      },
      {
        "text": "html_attr_type",
        "link": "/3.x/filters/html_attr_type"
      },
      {
        "text": "html_to_markdown",
        "link": "/3.x/filters/html_to_markdown"
      },
      {
        "text": "inky_to_html",
        "link": "/3.x/filters/inky_to_html"
      },
      {
        "text": "inline_css",
        "link": "/3.x/filters/inline_css"
      },
      {
        "text": "invoke",
        "link": "/3.x/filters/invoke"
      },
      {
        "text": "join",
        "link": "/3.x/filters/join"
      },
      {
        "text": "json_encode",
        "link": "/3.x/filters/json_encode"
      },
      {
        "text": "keys",
        "link": "/3.x/filters/keys"
      },
      {
        "text": "language_name",
        "link": "/3.x/filters/language_name"
      },
      {
        "text": "last",
        "link": "/3.x/filters/last"
      },
      {
        "text": "length",
        "link": "/3.x/filters/length"
      },
      {
        "text": "locale_name",
        "link": "/3.x/filters/locale_name"
      },
      {
        "text": "lower",
        "link": "/3.x/filters/lower"
      },
      {
        "text": "map",
        "link": "/3.x/filters/map"
      },
      {
        "text": "markdown_to_html",
        "link": "/3.x/filters/markdown_to_html"
      },
      {
        "text": "merge",
        "link": "/3.x/filters/merge"
      },
      {
        "text": "nl2br",
        "link": "/3.x/filters/nl2br"
      },
      {
        "text": "number_format",
        "link": "/3.x/filters/number_format"
      },
      {
        "text": "plural",
        "link": "/3.x/filters/plural"
      },
      {
        "text": "raw",
        "link": "/3.x/filters/raw"
      },
      {
        "text": "reduce",
        "link": "/3.x/filters/reduce"
      },
      {
        "text": "replace",
        "link": "/3.x/filters/replace"
      },
      {
        "text": "reverse",
        "link": "/3.x/filters/reverse"
      },
      {
        "text": "round",
        "link": "/3.x/filters/round"
      },
      {
        "text": "shuffle",
        "link": "/3.x/filters/shuffle"
      },
      {
        "text": "singular",
        "link": "/3.x/filters/singular"
      },
      {
        "text": "slice",
        "link": "/3.x/filters/slice"
      },
      {
        "text": "slug",
        "link": "/3.x/filters/slug"
      },
      {
        "text": "sort",
        "link": "/3.x/filters/sort"
      },
      {
        "text": "spaceless",
        "link": "/3.x/filters/spaceless"
      },
      {
        "text": "split",
        "link": "/3.x/filters/split"
      },
      {
        "text": "striptags",
        "link": "/3.x/filters/striptags"
      },
      {
        "text": "timezone_name",
        "link": "/3.x/filters/timezone_name"
      },
      {
        "text": "title",
        "link": "/3.x/filters/title"
      },
      {
        "text": "trim",
        "link": "/3.x/filters/trim"
      },
      {
        "text": "u",
        "link": "/3.x/filters/u"
      },
      {
        "text": "upper",
        "link": "/3.x/filters/upper"
      },
      {
        "text": "url_encode",
        "link": "/3.x/filters/url_encode"
      }
    ]
  },
  {
    "text": "Functions",
    "collapsed": true,
    "items": [
      {
        "text": "attribute",
        "link": "/3.x/functions/attribute"
      },
      {
        "text": "block",
        "link": "/3.x/functions/block"
      },
      {
        "text": "constant",
        "link": "/3.x/functions/constant"
      },
      {
        "text": "country_names",
        "link": "/3.x/functions/country_names"
      },
      {
        "text": "country_timezones",
        "link": "/3.x/functions/country_timezones"
      },
      {
        "text": "currency_names",
        "link": "/3.x/functions/currency_names"
      },
      {
        "text": "cycle",
        "link": "/3.x/functions/cycle"
      },
      {
        "text": "date",
        "link": "/3.x/functions/date"
      },
      {
        "text": "dump",
        "link": "/3.x/functions/dump"
      },
      {
        "text": "enum_cases",
        "link": "/3.x/functions/enum_cases"
      },
      {
        "text": "enum",
        "link": "/3.x/functions/enum"
      },
      {
        "text": "html_attr",
        "link": "/3.x/functions/html_attr"
      },
      {
        "text": "html_classes",
        "link": "/3.x/functions/html_classes"
      },
      {
        "text": "html_cva",
        "link": "/3.x/functions/html_cva"
      },
      {
        "text": "include",
        "link": "/3.x/functions/include"
      },
      {
        "text": "language_names",
        "link": "/3.x/functions/language_names"
      },
      {
        "text": "locale_names",
        "link": "/3.x/functions/locale_names"
      },
      {
        "text": "max",
        "link": "/3.x/functions/max"
      },
      {
        "text": "min",
        "link": "/3.x/functions/min"
      },
      {
        "text": "parent",
        "link": "/3.x/functions/parent"
      },
      {
        "text": "random",
        "link": "/3.x/functions/random"
      },
      {
        "text": "range",
        "link": "/3.x/functions/range"
      },
      {
        "text": "script_names",
        "link": "/3.x/functions/script_names"
      },
      {
        "text": "source",
        "link": "/3.x/functions/source"
      },
      {
        "text": "template_from_string",
        "link": "/3.x/functions/template_from_string"
      },
      {
        "text": "timezone_names",
        "link": "/3.x/functions/timezone_names"
      }
    ]
  },
  {
    "text": "Tests",
    "collapsed": true,
    "items": [
      {
        "text": "constant",
        "link": "/3.x/tests/constant"
      },
      {
        "text": "defined",
        "link": "/3.x/tests/defined"
      },
      {
        "text": "divisible by",
        "link": "/3.x/tests/divisibleby"
      },
      {
        "text": "empty",
        "link": "/3.x/tests/empty"
      },
      {
        "text": "even",
        "link": "/3.x/tests/even"
      },
      {
        "text": "iterable",
        "link": "/3.x/tests/iterable"
      },
      {
        "text": "mapping",
        "link": "/3.x/tests/mapping"
      },
      {
        "text": "null",
        "link": "/3.x/tests/null"
      },
      {
        "text": "odd",
        "link": "/3.x/tests/odd"
      },
      {
        "text": "same as",
        "link": "/3.x/tests/sameas"
      },
      {
        "text": "sequence",
        "link": "/3.x/tests/sequence"
      }
    ]
  }
] satisfies DefaultTheme.SidebarItem[];
