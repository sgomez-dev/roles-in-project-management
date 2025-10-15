FROM node:20-alpine AS build
WORKDIR /app

COPY roles-in-project-management/package*.json ./
COPY roles-in-project-management/tsconfig*.json ./
COPY roles-in-project-management/vite.config.ts ./
COPY roles-in-project-management/ ./

RUN npm ci || npm install
RUN npm run build

FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80