# Stage 1: Build Stage
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install --frozen-lockfile

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN yarn build

# Stage 2: Run Stage
FROM builder AS runner

# Set the environment variable to production
ENV NODE_ENV production

# Set the environment variable to the port the application runs on
ENV PORT 3000

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the builder stage to the working directory
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the application runs on
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["yarn", "start"]
