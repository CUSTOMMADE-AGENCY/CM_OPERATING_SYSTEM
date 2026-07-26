# 05 OPERATIONS

## Doel

`05_OPERATIONS` bevat de bedrijfsbrede uitvoeringslaag van het CM Operating System.

Dit bestand is de primaire ingang voor de scope en categorieën van `05_OPERATIONS`. De aanvullende [`OPERATIONS_INDEX.md`](OPERATIONS_INDEX.md) is uitsluitend de navigatiekaart en geen concurrerende primaire index.

## Structuur

```text
05_OPERATIONS/
├── WORKFLOWS
├── SOPS
├── PLAYBOOKS
├── AUTOMATIONS
├── AGENTS
└── KNOWLEDGE_BASE
```

## Definities

| Onderdeel | Functie |
|---|---|
| `WORKFLOWS` | Beschrijven de volledige keten van trigger tot afgeronde output. |
| `SOPS` | Beschrijven exact hoe één terugkerende taak wordt uitgevoerd. |
| `PLAYBOOKS` | Bevatten beslisregels, scenario's, uitzonderingen en tactische aanpak. |
| `AUTOMATIONS` | Documenteren triggers, logica, integraties, logging, retries en failure handling. |
| `AGENTS` | Definiëren rollen, scope, bevoegdheden, tools, verboden handelingen en escalatie. |
| `KNOWLEDGE_BASE` | Bevat vakinhoud, referentiekennis en operating context. |

## Relatie

Een Agent gebruikt Workflows, voert taken uit volgens SOPs, gebruikt Playbooks bij uitzonderingen, raadpleegt de Knowledge Base en kan worden ondersteund door Automations.

Agents staan daarom niet onder `SOPS`.

## Systeemgrenzen

- GitHub bewaart de systeemdocumentatie.
- Google Drive bewaart live operationele bestanden.
- ClickUp bewaart uitvoering en taken.
- Gmail bewaart communicatie.
- Moneybird bewaart financiële waarheid.

## Templates

Templates worden tijdens de huidige repository recovery niet verplaatst, hernoemd of inhoudelijk gewijzigd. Hiervoor volgt een aparte reviewfase.
