# Baromètre de l'organisation · DIGIVAS

Questionnaire RH en 20 affirmations, publié pour chaque mission client du cabinet DIGIVAS.

- Lien répondants : `https://<domaine>/?m=<mission>` (par défaut `swisse-travel`)
- Espace DIGIVAS : `https://<domaine>/?m=<mission>#espace-digivas`, code d'accès vérifié côté serveur

Les réponses sont enregistrées dans Supabase (tables `digivas_missions` et `digivas_reponses`). Les répondants peuvent seulement envoyer une réponse. La lecture passe par la fonction `digivas_resultats`, qui vérifie le code de la mission.
