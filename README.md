# Baromètre et espace consultante · Swisse Travel · DIGIVAS

- `index.html` : questionnaire de l'équipe et espace consultante (`#espace-digivas`, accès par code).
- `api/generer.js` : rédaction des livrables assistée par l'IA (fonction Vercel).

## Activer la rédaction IA
Dans Vercel, projet `digivas-barometre` → Settings → Environment Variables :
- `ANTHROPIC_API_KEY` : clé API créée sur console.anthropic.com (obligatoire)
- `ANTHROPIC_MODEL` : modèle à utiliser (facultatif, `claude-sonnet-5-5` par défaut)

Puis redéployer. La clé reste côté serveur. Chaque appel vérifie d'abord le code de l'espace consultante.
