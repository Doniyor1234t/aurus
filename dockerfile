# --- Stage 1: Build ---
FROM node:20-alpine AS builder
# or use node:22-alpine if you want the latest LTS

WORKDIR /app

# Copy dependencies files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build app
RUN yarn build

# --- Stage 2: Serve with Nginx ---
FROM nginx:stable-alpine

# Copy build output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config (for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
