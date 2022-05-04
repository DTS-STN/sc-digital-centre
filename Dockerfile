FROM node:18.0.0-alpine3.15 AS base
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build

ARG NEXT_BUILD_DATE
ENV NEXT_PUBLIC_BUILD_DATE=$NEXT_BUILD_DATE

ARG NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=$NEXT_PUBLIC_ADOBE_ANALYTICS_URL

ARG NEXT_CONTENT_API
ENV NEXT_CONTENT_API=$NEXT_CONTENT_API

ARG OCP_APIM_SUBSCRIPTION_KEY
ENV OCP_APIM_SUBSCRIPTION_KEY=$OCP_APIM_SUBSCRIPTION_KEY

ARG CPP_ACTIVE_BENEFIT_URL
ENV CPP_ACTIVE_BENEFIT_URL=$CPP_ACTIVE_BENEFIT_URL

ARG EI_ACTIVE_BENEFIT_URL
ENV EI_ACTIVE_BENEFIT_URL=$EI_ACTIVE_BENEFIT_URL

ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:18.0.0-alpine3.15 AS production
ENV NODE_ENV=production
SHELL ["/bin/sh", "-c"]
RUN apk add --no-cache bash
ARG user=joker
ARG home=/home/node
ARG group=thejokers
RUN addgroup -S $group
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home $home \
    --ingroup $group \
    $user

ENV NODE_ENV=production
WORKDIR $home
COPY --from=build --chown=55:$group /build/next.config.js ./
COPY --from=build --chown=55:$group /build/package*.json ./
COPY --from=build --chown=55:$group /build/.next ./.next
COPY --from=build --chown=55:$group /build/public ./public
RUN npm install next@12.1.5
USER $user

CMD npm run start