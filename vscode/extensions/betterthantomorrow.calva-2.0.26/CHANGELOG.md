# Change Log
Changes to Calva that I remembered to log.

## [1.3.0] - 16.04.2018
- Add support for [shadow-cljs](http://shadow-cljs.org). Please contact me with any information on how this is working for you out there.

## [1.2.14] - 06.04.2018
- Change all keyboard shortcuts to use prefix `ctrl+alt+v`, due to old prefix not working on some alterate keybpard layouts. See [Issue [#9](https://github.com/BetterThanTomorrow/calva/issues/9)](https://github.com/PEZ/clojure4vscode/issues/9).

## [1.2.12] - 06.04.2018
- Add command for re-running previously failing tests (`ctrl+alt+v ctrl+t`). 

## [1.2.10] - 03.04.2018
- Add command for toggling automatic adjustment of indentation for new lines (`ctrl+alt+v tab`)

## [1.2.8] - 02.04.2018
- Auto adjust indent more close to this Clojure Style Guide: https://github.com/bbatsov/clojure-style-guide

## [1.2.1] - 28.03.2018
- Select current (auto-detected) form

## [1.2.0] - 28.03.2018
- Terminal REPLs
  - Integrates REPL sessions from the Terminal tab and lets you do stuff like load current namespace ad evaluate code from the editor in the REPL.
- Connection and reconnection stabilization
  - Conecting the editor REPLs was a bit unstable. Now more stable (but there are still some quirks).

## [1.1.20] - 25.03.2018
- Auto detection of forms to evaluate now condiders reader macro characters prepending the forms. E.g. before if you tried to evaluate say `#{:a :b :c}` with the cursor placed directly adjacent to the starting or ending curly braces only `{:a :b :c}` would be autodetected and evaluated.
- Highlighting of auto detected forms being evaluated.
- Rendering evaluation errors in the editor the same way as successful (but in red to quickly indicate that the evaluation errored).

![Evaluation demo](https://github.com/BetterThanTomorrow/calva/raw/master/assets/howto/evaluate.gif)

## [1.1.15] - 20.03.2018
- Evaluates vectors and maps with the same ”smart” selection as for lists.

## [1.1.11] - 20.03.2018
- Add inline annotations for interactive code evaluation results.

## [1.1.9] - 18.03.2018
- Add toggle for switching which repl connection is used for `cljc` files, `clj` or `cljs`.

![CLJC repl switching](https://github.com/BetterThanTomorrow/calva/raw/master/assets/howto/cljc-clj-cljs.gif)

- `clj` repl connected to all file types, meaning you can evaluate clojure code in, say, Markdown files.


## [1,1.3] - 17.03.2018
- User setting to evaluate namespace on save/open file (defaults to **on**)

## [1.1.1] - 16.03.2018
- Relase of v1, based on **visual:clojure** v2.0, adding:
    - Running tests through the REPL connection, and mark them in the Problems tab
        - Run namespace tests: `ctrl+alt+v t`
        - Run all tests: `ctrl+alt+v a`
    - Evaluate code and replace it in the editor, inline: `ctrl+alt+v e`
    - Error message when evaluation fails
    - Pretty printing evaluation resuls: `ctrl+alt+v p`
    - Support for `cljc` files (this was supposed to be supported by the original extension, but bug)

