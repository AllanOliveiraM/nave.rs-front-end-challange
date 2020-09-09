FROM gitpod/workspace-full

USER gitpod


RUN sudo apt-get -q update && sudo apt-get upgrade
RUN npm install -g npm
