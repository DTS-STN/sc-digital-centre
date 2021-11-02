FROM node:current-alpine3.11 AS base
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build
ARG BUILD_DATE
ARG NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ARG NEXT_CONTENT_API
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=$NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ENV NEXT_CONTENT_API=$NEXT_CONTENT_API
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine3.11 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

CMD npm run start