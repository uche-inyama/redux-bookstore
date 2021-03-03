FROM node:13.12.0-alpine as build
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install --ignore-engines
RUN yarn
COPY . /app
RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
