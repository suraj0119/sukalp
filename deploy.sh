#!/bin/bash

# Sukalp Foundation Deployment Script
# This script builds and deploys the Sukalp Foundation website

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Sukalp Foundation Deployment Script ===${NC}"

# Step 1: Check if Node.js is installed
echo -e "${YELLOW}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed. Please install Node.js 18.x or higher.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}Node.js ${NODE_VERSION} is installed.${NC}"

# Step 2: Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install dependencies.${NC}"
    exit 1
fi
echo -e "${GREEN}Dependencies installed successfully.${NC}"

# Step 3: Build the project
echo -e "${YELLOW}Building the project...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed.${NC}"
    exit 1
fi
echo -e "${GREEN}Build completed successfully.${NC}"

# Step 4: Check if dist folder was created
if [ ! -d "dist" ]; then
    echo -e "${RED}dist folder was not created. Build may have failed.${NC}"
    exit 1
fi

echo -e "${GREEN}dist folder created successfully.${NC}"
echo -e "${BLUE}Files in dist folder:${NC}"
ls -la dist | head -n 10
echo -e "${YELLOW}... and more files${NC}"

# Step 5: Deployment options
echo -e "${BLUE}=== Deployment Options ===${NC}"
echo -e "1. Run locally (for testing)"
echo -e "2. Deploy to server (requires SSH access)"
echo -e "3. Exit without deploying"

read -p "Select an option (1-3): " DEPLOY_OPTION

case $DEPLOY_OPTION in
    1)
        echo -e "${YELLOW}Starting local server...${NC}"
        cd dist && node server.js
        ;;
    2)
        read -p "Enter server SSH address (e.g., user@example.com): " SSH_ADDRESS
        read -p "Enter destination path on server: " DEST_PATH
        
        echo -e "${YELLOW}Deploying to ${SSH_ADDRESS}:${DEST_PATH}...${NC}"
        ssh $SSH_ADDRESS "mkdir -p $DEST_PATH"
        scp -r dist/* $SSH_ADDRESS:$DEST_PATH
        
        if [ $? -ne 0 ]; then
            echo -e "${RED}Deployment failed.${NC}"
            exit 1
        fi
        
        echo -e "${GREEN}Deployment completed successfully.${NC}"
        echo -e "${YELLOW}To start the server, run:${NC}"
        echo -e "ssh $SSH_ADDRESS \"cd $DEST_PATH && node server.js\""
        ;;
    3)
        echo -e "${YELLOW}Exiting without deploying.${NC}"
        echo -e "${GREEN}The dist folder is ready for manual deployment.${NC}"
        ;;
    *)
        echo -e "${RED}Invalid option.${NC}"
        exit 1
        ;;
esac

echo -e "${BLUE}=== Deployment Script Completed ===${NC}"
