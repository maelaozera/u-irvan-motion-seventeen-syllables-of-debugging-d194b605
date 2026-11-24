[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/maelaozera/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/maelaozera/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

# Seventeen Syllables of Debugging

An entry for the [Seventeen Syllables of Debugging](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605) bounty on [make.fun](https://make.fun). One haiku about debugging, in the 5-7-5 syllable shape:

> stack trace, three a.m.
> each frame blames the one below
> no one confesses

## How it works

`main.ts` writes the haiku to `/output/entry.txt` (71 characters plus a
trailing newline, well inside the 1–200 character gate) and refuses to write
anything outside that range.

Run it with Node 22:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
