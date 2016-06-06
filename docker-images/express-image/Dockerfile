FROM node:4.4

RUN apt-get update && \
    apt-get install -y vim  

COPY src /apt/app

CMD ["node" , "/apt/app/index.js"]