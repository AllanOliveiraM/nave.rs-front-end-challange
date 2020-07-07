FROM gitpod/workspace-full

USER gitpod


RUN sudo apt-get -q update
RUN npm install -g npm
