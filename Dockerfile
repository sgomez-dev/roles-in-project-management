FROM node:20-alpine AS build
WORKDIR /src

COPY . .

RUN set -eux; \
    if [ -f roles-in-project-management/package.json ]; then \
      cd roles-in-project-management; \
      npm ci || npm install; \
      npm run build; \
      cp -r dist /tmp/dist; \
    else \
      npm ci || npm install; \
      npm run build; \
      cp -r dist /tmp/dist; \
    fi

FROM nginx:alpine AS production

COPY --from=build /tmp/dist /usr/share/nginx/html

EXPOSE 80