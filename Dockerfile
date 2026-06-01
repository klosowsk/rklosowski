# Stage 1: Build Stage
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Enable Corepack so the pinned Yarn 4 (packageManager field) is used
RUN corepack enable

# Copy the project and install in-image (after copy) so the node_modules
# install state is consistent — host .yarn state is ignored via .dockerignore.
COPY . .

# Install dependencies using yarn
RUN yarn install --immutable

# Build the project (optimizes images to WebP, then next build)
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
