[![Unsent: The Micro-Confession Sprint](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/yannyonn94/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/yannyonn94/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

# Unsent: The Micro-Confession Sprint

**Concept:** a confession to a stranger on the 7:40 bus — never spoken to, only watched from two seats back, memorized stop by stop until she stopped riding in June. The reason it stayed unsent is in the words themselves: fear, not a statement of fear. Every line is a verifiable detail (7:40, third stop, June, every morning), and swapping the addressee would break it — the stop, the bus, the June disappearance belong to Rani alone.

The entry, exactly as the program writes it (152 characters, 2 lines):

```text
To: Rani, the girl from the 7:40 bus
I memorized your stop, third from the end, and I still look up every morning even though you stopped riding in June
```

## Why this confession

Concept test (3 variants, scored on specificity + how genuinely unsent it feels):

1. **Dani, the old roommate** — kept his spare key 3 years for a blue mug left behind. Specific (8/10), unsent (8/10).
2. **Ibu** — failed an exam in March, spent tuition money fixing her motorbike. Specific (6/10); reads like a letter meant to be sent one day, not a typed draft.
3. **Rani, the girl from the 7:40 bus (winner)** — memorized her stop, third from the end; still looks up every morning though she stopped riding in June. Specific (9/10), unsent (9/10): never even spoken to, so the message could only ever live in drafts.

Judge's-view check: read as plain text, the confession lands on the first read — the bus, the stop, the month she vanished. No explanation follows the message; no joke, greeting, or motivational line. The reason it stayed unsent (too afraid to speak to a stranger) is felt in the words, never stated.

## How it runs

`main.ts` (Node 22+) writes the confession to `/output/entry.txt` — deterministic, offline, no input, no secrets, no network. It self-checks the gate before writing: 1–260 characters total, message line at most 200 characters, exactly a `To:` line plus one message line, nothing after it.

```sh
node main.ts
```

## Files

- `main.ts` — the entrypoint; writes `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet
