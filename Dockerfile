FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nobody1001-sl/kafde /root/4.5
WORKDIR /root/4.5/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g


CMD ["node", "bot.js"]
