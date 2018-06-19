FROM  stefanscherer/node-windows:8.11.1-build-tools 

ADD  . c:/1002.OFE-REPO
WORKDIR c:\\1002.OFE-REPO



RUN npm i --save electron 

CMD [ "cmd" ]