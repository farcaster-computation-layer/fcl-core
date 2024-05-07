###############
# Build Phase #
###############
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i
RUN npm i -g @nestjs/cli dotenv-cli

COPY . .

# Nest Build
RUN npm run build

#############
# Run Phase #
#############
FROM node:20-alpine as runner

WORKDIR /app

RUN npm install -g dotenv-cli

# Set up the args
ARG DATABASE_URL
ARG DATABASE_USER
ARG DATABASE_PASS
ARG PORT

ENV DATABASE_URL $DATABASE_URL
ENV DATABASE_USER $DATABASE_USER
ENV DATABASE_PASS $DATABASE_PASS
ENV PORT $PORT

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/tsconfig*.json ./

ENTRYPOINT ["npm", "run", "start"]
