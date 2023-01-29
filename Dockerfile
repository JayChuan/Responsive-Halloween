FROM nginx:alpine
COPY . /var/www
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /var/www