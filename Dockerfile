FROM node:17-alpine

WORKDIR /usr/server/app

RUN apk --no-cache add \
    nss \
    chromium \
    freetype \
    freetype-dev \
    harfbuzz \
    ttf-freefont \
    yarn \
    g++ \
    make \
    python3 \
    bash \
    ca-certificates

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package from above.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY .npmrc package.json package-lock.json ./
RUN npm install

COPY ./ .
RUN npm run build
ENV NODE_ENV=production
CMD ["npm", "run" ,"start"]