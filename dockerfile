FROM node

COPY . .

WORKDIR /teamder-front

RUN npm i

#le EXPOSE permet d'ouvrir la connexion à partir de l'extérieur du réseau. Ici, le port 4200 va permettre l'entée dans l'app.
EXPOSE 4200

CMD [ "npm", "run", "dev"] 
