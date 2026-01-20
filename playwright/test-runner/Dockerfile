# Version must match the version in the package.json
FROM mcr.microsoft.com/playwright:v1.57.0

WORKDIR /playwright-test-runner

COPY package*.json /

RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]
