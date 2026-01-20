#!/usr/bin/env bash
set -euo pipefail

# Run Playwright tests inside Docker to isolate the test environment.
#
# The first run may take longer while the image is being built and dependencies are installed.
#
# If your OS is Windows, you may consider using WSL to run this command.

PROJECT_DIR="$(pwd)"
IMAGE_NAME="playwright:test-runner"
DOCKERFILE_PATH="./playwright/test-runner/Dockerfile"


# Two modes:
# - update -> updates snapshots and copies the ones that do not exist into the project folder
# - test -> runs tests
# In both modes, you will get an HTML report in your /playwright folder
MODE="${1:-}"
[ "$MODE" = "update" ] && PLAYWRIGHT_ARGS="-u" || PLAYWRIGHT_ARGS=""

# Check if Docker image exists, build if not
if ! docker inspect --type=image "$IMAGE_NAME" >/dev/null 2>&1; then
  echo "Image $IMAGE_NAME not found. Building..."

  docker build -f "$DOCKERFILE_PATH" -t "$IMAGE_NAME" .
fi

# Run Docker command (isolated node_modules to prevent using the mounted directory)
docker run \
  --rm \
  -v "$PROJECT_DIR":/playwright-test-runner \
  -e IS_DOCKER=1 \
  -v playwright_test_runner_node_modules:/playwright-test-runner/node_modules \
  -w /playwright-test-runner \
  playwright:test-runner \
  npx playwright test "$PLAYWRIGHT_ARGS" --config=playwright/playwright.config.ts