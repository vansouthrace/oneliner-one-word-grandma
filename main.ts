// One word grandma would text about AI: the classic word for a gadget she cannot name.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "thingamajig");
