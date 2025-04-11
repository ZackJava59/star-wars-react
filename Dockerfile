FROM nginx:alpine
LABEL authors="Zack"

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf