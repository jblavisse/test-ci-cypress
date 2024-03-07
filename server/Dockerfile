# Utilise l'image officielle Node.js comme image de base
FROM node:lts

# Définis le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers sources du projet dans le répertoire de travail
COPY . .

# Expose le port sur lequel le serveur s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]